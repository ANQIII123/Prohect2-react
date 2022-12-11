import React from 'react';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import Sheet from '../models/Sheet';
import './AddSheet.css';
import { validateObjectFilled } from '../component/helper';

    
export default class AddSheet extends React.Component {

    url = "https://anqiii123-project2expre-x88mcsdunmi.ws-us77.gitpod.io"
    

    constructor(props){
        super(props);
        this.state = {
            mysheet : new Sheet,
            generatedFields : [],
            composerFields:[],
            composer:[],
            selectedKeywords:[],
            formError:''
        }
        console.log(this.state.composerFields)
        this.updateFormField = this.updateFormField.bind(this);

    }



    updateFormField = (event) => {

        this.setState(
                prevState => { 
                    let _mysheet = prevState.mysheet

                    for (const property in _mysheet) {
                        if (_mysheet[property][event.target.name] !== undefined){
                            _mysheet[property][event.target.name] = event.target.value;
                            return ({mysheet: _mysheet})
                        }
                    }
        })

    } 


    addNewSheet= async ()=>{

        let formError = false

        let newsheet = this.state.mysheet;
        newsheet.cover.coverComposer = this.state.composer;
        
        newsheet.cover.keywords= this.state.selectedKeywords

        Object.values(newsheet).forEach(nestedObj => {
            let emptyKeys =validateObjectFilled(nestedObj,['reviews']);
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

            let result = await axios.post(this.url + '/addSheet',
            {"sheet": newsheet})

            console.log(result);

            alert('sheet added!')
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
                label={keywords[i]}
                onChange={(event)=>{
                    let newSelectedKeyword = this.state.selectedKeywords;
                    if (event.target.checked){
                        newSelectedKeyword.push(keywords[i])
                    }else{
                        newSelectedKeyword = newSelectedKeyword.filter((ele)=>{return ele != keywords[i]});
                    }
                    this.setState({selectedKeywords:newSelectedKeyword})
                }}
              />
            </div>)
        }
        
        return keywordFields
    }

    

  render(){ 

    let _generatedFields= []
            
    Object.keys(this.state.mysheet.cover).forEach(key=> {
                
    let _field =this.state.mysheet.cover[key]
    
    if (typeof _field === 'string' && key!=='difficulty' ){
        _generatedFields.push(
            <Form.Group className="mb-3" key={key}>
            <Form.Label>{key.replace(/([A-Z])/g, " $1").toLowerCase()}</Form.Label>
                <Form.Control type="text" name={key} onChange={this.updateFormField}/>
            </Form.Group>
        )
    }
    
    })  
    
    return (
        <React.Fragment>
   <div className='sheetPage' style={{"fontFamily":"sansSerif","fontSize":"20px"}}>        
            <h1>Upload a new piano music score!</h1>
              <div>
            <Form className='form'>
                <Row>
                    <Col md={4} className="justify-content-center">
                        <Form.Group className="mb-3">
                            <Form.Label>Song Name:</Form.Label>
                                <Form.Control type="text" name="songName" placeholder="The original song name" onChange={this.updateFormField}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Anime Name:</Form.Label>
                                <Form.Control type="text" name="animaeName" placeholder="The anime that the song is from" onChange={this.updateFormField}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Anime Description:</Form.Label>
                                <Form.Control as="textarea" rows={3} name="animaeDescription" placeholder="Give a short description about this anime!" onChange={this.updateFormField}/>
                        </Form.Group>

                        {this.generateKeywords()}                 
                    </Col>

                    <Col md={4} className="justify-content-center">                        
                    {_generatedFields}

                    <div className='form-group mt-3'>

                         <label htmlFor="difficulty" >Pick Difficulty ▼</label>                      
                            <select
                                name="difficulty"
                                className="form-control"
                                onChange={this.updateFormField}>
                                <option value="Easy">Easy</option>
                                <option value="Normal">Normal</option>
                                <option value="Hard">Hard</option>
                                <option value="Expert">Expert</option>
                            </select>

                                 </div>
                    </Col>
                    <Col md={4} className="justify-content-center"> 
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

                            <Button className="btn btn-dark mt-3 btn-lg btn-block" onClick={()=>this.addNewSheet()}>Add this</Button>
                        </Form.Group>
                        <img className='umaru' src="https://www.seekpng.com/png/detail/164-1641459_transparent-haikyuu-haikyuu-transparent.png"></img>
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

