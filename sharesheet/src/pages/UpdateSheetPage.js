import React from 'react';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import Sheet from '../models/Sheet';
import './AddSheet.css';
import { validateObjectFilled } from '../component/helper';

    
export default class UpdateSheet extends React.Component {

    url = "https://3000-anqiii123-project2expre-x88mcsdunmi.ws-us77.gitpod.io"
    

    constructor(props){
        super(props);
        this.state = {
            sheet : new Sheet,
            generatedFields : [],
            composerFields:[],
            composer:[],
            selectedKeywords:[],
            formError:''
        }
        this.updateFormField = this.updateFormField.bind(this);

    }

    componentDidMount() {
        const query = new URLSearchParams(this.props);
        console.log(query)


        axios.post(`https://3000-anqiii123-project2expre-x88mcsdunmi.ws-us77.gitpod.io/getSheetById`,
            {
                "id": this.props.sheetid,
            })

            .then(response => {
                console.log(response);
                const _sheet = response.data;
                _sheet.cover.cost = _sheet.cover.cost.$numberDecimal
                let _composerFields = []
                _sheet.cover.coverComposer.forEach((composer,index) => {
                    _composerFields.push(
                    <Form.Group className="mb-3" key={index}>
                        <Form.Label>Composer: {index+1}</Form.Label>
                        <Form.Control 
                            type="text" 
                            name={'composer '+ [index+1]}
                            value ={this.state.composer[index]}
                            onChange={(event)=>{
                                let newcomposer = this.state.composer
                                newcomposer[index] = event.target.value
                                this.setState({composer:newcomposer})
                            }}
                        />
                    </Form.Group>)
                })
                

                this.setState({
                    composer: _sheet.cover.coverComposer,
                    sheet: _sheet,
                    selectedKeywords:_sheet.cover.keywords,
                    composerFields:_composerFields
                });

            })
            .catch(function (error) {
                console.log(error);
            });

    }



    updateFormField = (event) => {

        this.setState(
                prevState => { 
                    let _mysheet = prevState.sheet

                    for (const property in _mysheet) {
                        if (_mysheet[property][event.target.name] !== undefined){
                            _mysheet[property][event.target.name] = event.target.value;
                            return ({sheet: _mysheet})
                        }
                    }
        })

    } 


    editSheet= async ()=>{

        console.log(this.state.selectedKeywords)

        let formError = false

        let newsheet = this.state.sheet;
        newsheet.cover.coverComposer = this.state.composer;
        
        newsheet.cover.keywords= this.state.selectedKeywords

        Object.values(newsheet).forEach(nestedObj => {
            let emptyKeys =validateObjectFilled(nestedObj,['reviews','animaeName','animaeDescription']);
            if(emptyKeys.length>=1){
                console.log(emptyKeys)
                this.setState({
                    formError:'please fill in all fields'
                })
                formError = true
            }

        });

        if(isNaN(newsheet.cover.cost)){
            this.setState({
                formError:'cost must be a number'
            })
            formError = true
        }

        console.log(formError)

        if(formError == false){

            this.setState({
                formError:''
            })

            let id = newsheet._id

            delete newsheet._id

            let result = await axios.post(this.url + '/updatesheet',
            {"sheet": newsheet,
            "id":id})

            console.log(result);

            alert('sheet edited!')
        }


    }

    addComposer(){ 
        console.log('add composer')
        this.setState(this.setState(prevState => ({
            composerFields: [...prevState.composerFields,     <Form.Group className="mb-3" key={prevState.composerFields.length}>
            <Form.Label>Composer: {prevState.composerFields.length+1}</Form.Label>
                <Form.Control type="text" name={'composer'+ prevState.composerFields.length} onChange={(event)=>{
                    let newcomposer = this.state.composer
                    newcomposer[prevState.composerFields.length] = event.target.value
                    this.setState({composer:newcomposer})
                    console.log(this.state)
                }}/>
            </Form.Group>]
          }))
                   
        )
        console.log(this.state.composerFields)
        
    }

    deleteComposer(){
        this.setState(this.setState(prevState => ({
            composerFields:prevState.composerFields.slice(0,-1),
            composer:prevState.composer.slice(0,-1)
        })))        
    }

    generateKeywords(){
        let keywords = ['Beginner friendly', 'Newly composed', 'Award winning','Challenging'];
        let keywordFields = []
        for(let i = 0; i < keywords.length; i++){
            
            keywordFields.push(<div key={i} className="mb-3">
              <Form.Check 
                type='checkbox'
                name={i}
                checked = {
                    this.state.selectedKeywords.includes(keywords[i])
                }
                label={keywords[i]}
                onChange={(event)=>{
                    let newSelectedKeyword = this.state.selectedKeywords;
                    if (event.target.checked){
                        newSelectedKeyword.push(keywords[i])
                    }else{
                        newSelectedKeyword = newSelectedKeyword.filter((ele)=>{return ele != keywords[i]});
                    }
                    event.target.checked = !event.target.checked
                    this.setState({selectedKeywords:newSelectedKeyword})
                }}
              />
            </div>)
        }
        
        return keywordFields
    }

    

  render(){ 

    let _generatedFields= []
            
    Object.keys(this.state.sheet.cover).forEach(key=> {
                
    let _field =this.state.sheet.cover[key]
    
    if (typeof _field === 'string' && key!=='difficulty' ){
        _generatedFields.push(
            <Form.Group className="mb-3" key={key}>
            <Form.Label>{key.replace(/([A-Z])/g, " $1").toLowerCase()}</Form.Label>
                <Form.Control type="text" name={key} value={_field} onChange={this.updateFormField}/>
            </Form.Group>
        )
    }
    
    })  
    
    return (
        <React.Fragment>
   <div className='sheetPage'>        
            <h1>Edit {this.state.sheet.original.songName}</h1>
              <div>
            <Form className='form'>
                <Row>
                    <Col md={4} className="justify-content-center">
                        {/* 这里可以改^ */}
                        <Form.Group className="mb-3">
                            <Form.Label>Song Name:</Form.Label>
                                <Form.Control type="text" name="songName" placeholder="The original song name" 
                                value={this.state.sheet.original.songName} onChange={this.updateFormField}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Anime Name:</Form.Label>
                                <Form.Control type="text" name="animaeName" placeholder="The anime that the song is from" 
                                value={this.state.sheet.animaeRelated.animaeName} onChange={this.updateFormField}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Anime Description:</Form.Label>
                                <Form.Control as="textarea" rows={3} name="animaeDescription" value={this.state.sheet.animaeRelated.animaeDescription} 
                                onChange={this.updateFormField}/>
                        </Form.Group>

                        {this.generateKeywords()}                 
                    </Col>

                    <Col md={4} className="justify-content-center">
                        {/* 这里可以改^ */}
                        
                    {_generatedFields}

                    <div className='form-group mt-3'>

                         <label htmlFor="difficulty" >Pick Difficulty ▼</label>                      
                            <select
                                name="difficulty"
                                className="form-control"
                                value={this.state.sheet.cover.difficulty}
                                onChange={this.updateFormField}>
                                <option value="Easy">Easy</option>
                                <option value="Normal">Normal</option>
                                <option value="Hard">Hard</option>
                                <option value="Expert">Expert</option>
                            </select>

                            {/* <Button className="btn btn-dark mt-3 btn-lg" onClick={()=>this.editSheet()}>Add this</Button> */}
                </div>
                    </Col>
                    <Col md={4} className="justify-content-center"> 
                    {/* 这里可以改^ */}
                    {/* <Col md={4}> = <div class='col-md-4'> class=className button row col B, R, C */}
                    <div>
                        <Form.Group>
                            <Form.Label>Cover Composer:</Form.Label>
                            {this.state.composerFields}
                            <br />
                            <Button className="btn-dark mt-3 margin-left" onClick={()=>this.addComposer()}>Add name</Button> 
                            <Button className="btn-dark mt-3 margin-left" onClick={()=>this.deleteComposer()}>Delete name</Button>
                            <br />
                            <br />

                            {this.state.formError == '' ? null :
                                    (
                                        <Row className="mb-3" style={{ color: 'red' }}>
                                            <p>{this.state.formError}</p>
                                        </Row>
                                    )
                                }

                            <Button className="btn btn-dark mt-3 btn-lg btn-block" onClick={()=>this.editSheet()}>Edit Sheet</Button>
                        </Form.Group>
                        <img className='umaru' src="https://i.im.ge/2022/07/25/FLuBFC.png"></img>
                        </div>
                    </Col>

                </Row>
            </Form>
         </div>
     

                 
                
     </div>
        </React.Fragment>
    )
  }

}