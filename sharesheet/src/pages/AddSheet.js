import React from 'react';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import Sheet from '../models/Sheet';
import './AddSheet.css';

    
export default class AddSheet extends React.Component {

    url = "https://3000-anqiii123-project2expre-x3pfoh1qdt5.ws-us54.gitpod.io"
    

    constructor(props){
        super(props);
        this.state = {
            mysheet : new Sheet,
            generatedFields : [],
            composerFields:[],
            composer:[],
            selectedKeywords:[]
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

        let newsheet = this.state.mysheet;
        newsheet.cover.coverComposer = this.state.composer;
        this.state.selectedKeywords.forEach(selectedKeyword => {
            newsheet.cover.keywords.push(selectedKeyword)
        });

        let result = await axios.post(this.url + '/addSheet',
            {
                "sheet": newsheet,
            })
        console.log(result);

        alert('sheet added!')

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
                    this.setState({selectedKeyword:newSelectedKeyword})
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
   <div className='sheetPage'>        
            <h1>Add a New Sheet!</h1>
              <div>
            <Form className='form'>
                <Row>
                    <Col md={4} className="justify-content-center">
                        {/* 这里可以改^ */}
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
                        {/* 这里可以改^ */}
                        
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

                            {/* <Button className="btn btn-dark mt-3 btn-lg" onClick={()=>this.addNewSheet()}>Add this</Button> */}
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
                            <Button className="btn btn-dark mt-3 btn-lg btn-block" onClick={()=>this.addNewSheet()}>Add this</Button>
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

{/* <MDBInput 
type="text" 
name='songName'
placeholder="Please enter Song Name"
onChange={this.updateFormField}/>


 <MDBInput
  type="text" 
  name='composer'
  placeholder="Please enter song composer"
  onChange={this.updateFormField}/>

 <MDBInput 
 type="text" 
 name='pianoSheetUrl'
 label="Please enter pianoSheetUrl "
 onChange={this.updateFormField}/> */}


// import React from 'react';
// import { Button } from "bootstrap";
// import axios from 'axios';


// export default class AddNew extends React.Component {

//     url = "https://3000-anqiii123-project2expre-wy8oi99z9ng.ws-us54.gitpod.io"

//     state = {
//         'newsongName': '',
//         'newComposer': [],
//         'newDifficulty':'',
//     }

//     updateFormField = (s) => {
//         this.setState({
//             [s.target.name]: s.target.value
//         })
//       } 
//   render(){    
//     return (
//         <React.Fragment>
//             <h1>Add Sheet</h1>
//                  <div className='form-group'>
//                         <input 
//                         type="text" 
//                         className='form-control'
//                         value={this.state.original.songName} 
//                         placeholder="Please enter Song Name"
//                         onChange={(event)=>{
//                         props.updateFormField('newSongName', event.target.value) 
//                         }}/>
//                   </div>
//                   <div className='form-group mt-3'>
//                          <input
//                           type="composer" 
//                           className='form-control'
//                           value={this.state.original.composer}
//                           placeholder="Please enter song composer"
//                           onChange={(event)=>{
//                             props.updateFormField('newComposer', event.target.value) 
//                             }}/>
//                   </div>
//                   <div className='form-group mt-3'>
//                          <input 
//                          type="text" 
//                          className='form-control' 
//                          value={this.state.cover.pianoSheetUrl} 
//                          placeholder="Please select difficulty" 
//                          onChange={(event)=>{
//                             props.updateFormField('newpianoSheetUrl', event.target.value) 
//                             }}/>
//                   </div>
//                  <div className='form-group mt-3'>
//                          <label 
//                          htmlFor="difficulty" 
//                          className="grey-text">Pick  difficulty ▼</label>
//                              <select
//                                      name="difficulty"
//                                      className="form-control">
//                                  <option value="Easy">Easy</option>
//                                  <option value="Normal">Normal</option>
//                                  <option value="Hard">Hard</option>
//                                  <option value="Expert">Expert</option>
//                                  onChange={(event)=>{
//                             props.updateFormField('newDifficulty', event.target.value) 
//                             }}
//                              </select>
//                 </div>
//         </React.Fragment>
//     )
//   }
// }
// export default class AddSheet extends React.Component {
    // state = {
    //     'newSongName':'',
    //     'newComposer':['']
    // }
//     BASE_API_URL="https://3000-anqiii123-project2expre-wy8oi99z9ng.ws-us54.gitpod.io"
   
//     updateFormField = (evt) => {
//         this.setState({
//             [evt.target.name] : evt.target.value
//       })
//     }

//     updateSheet = (index, newValue)=> {
//         this.setState({
//             'newSheet':[
//                 ...this.state.newSheet.slice(0,index),newValue,
//                 ...this.state.newSheet.slice(index + 1)
//             ]
//         })
//     }

//      addSheet = async () => {


//     let response = await axios.post(this.BASE_API_URL+'/all_sheet',{
//           '_id':new mongodb.ObjectId(),
//           'songName': this.state.original.songName,
//           'composer':this.state.original.composer
//     })

//     this.props.processAddSheet(response.data[0])
//     //     // '_id':'',
//     //     // 'songName': this.state.original.songName,
//     //     // 'composer':this.state.original.composer
//     // });
// }

//     render() {
//         return(
//             <React.Fragment>
//                 <h1>Add Sheet</h1>
//                 <div className='form-group'>
//                        <input type="text" className='form-control'value={this.state.original.songName} onChange={this.updateFormField} placeholder="Please enter Song Name" />
//                  </div>
//                  <div className='form-group mt-3'>
//                         <input type="composer" className='form-control'value={this.state.original.composer} onChange={this.updateFormField} placeholder="Please enter song composer" />
//                  </div>
//                 <div className='form-group mt-3'>
//                         <input type="text" className='form-control' value={this.state.cover.difficulty} onChange={this.updateFormField} placeholder="Please select difficulty" />
//                  </div>
//                 <div className='form-group mt-3'>
//                         <label htmlFor="difficulty" className="grey-text">Pick  difficulty ▼</label>
//                             <select
//                                    name="difficulty"
//                                     className="form-control">
//                                 <option value="Easy">Easy</option>
//                                 <option value="Normal">Normal</option>
//                                 <option value="Hard">Hard</option>
//                                 <option value="Expert">Expert</option>
//                            </select>
//                 </div>
//                 <div className='form-group mt-3'>
//                                  <input type="text" className='form-control' value={this.state.cover.pianoSheeteUrl} placeholder="Please upload Piano Sheet" />
//                 </div>
//                 <div className='form-group mt-3'>
//                                  <input type="text" className='form-control' value={this.state.cover.keyword} placeholder="Please select Keyword" />
//                 </div>
//                              <Button type='submit' className='btn btn-success mt-4'>Add Sheet</Button>
//             </React.Fragment>
//     )}
// }



        //      {
        //      props.data.map( Sheet=> {
        //         return(
        //             <React.Fragment>

        //             </React.Fragment>
        //         )
        //      })
        // }
        //      <div>
            //     <div className='form-group'>
            //            <input type="text" className='form-control'value={this.state.original.songName} placeholder="Please enter Song Name" />
            //      </div>
            //      <div className='form-group mt-3'>
            //             <input type="composer" className='form-control'value={this.state.original.composer} placeholder="Please enter song composer" />
            //      </div>
            //     <div className='form-group mt-3'>
            //             <input type="text" className='form-control' value={this.state.cover.difficulty}placeholder="Please select difficulty" />
            //      </div>
            //     <div className='form-group mt-3'>
            //             <label htmlFor="difficulty" className="grey-text">Pick  difficulty ▼</label>
            //                 <select
            //                        name="difficulty"
            //                         className="form-control">
            //                     <option value="Easy">Easy</option>
            //                     <option value="Normal">Normal</option>
            //                     <option value="Hard">Hard</option>
            //                     <option value="Expert">Expert</option>
            //                </select>
            //     </div>
            //     <div className='form-group mt-3'>
            //                      <input type="text" className='form-control' value={this.state.cover.pianoSheeteUrl} placeholder="Please upload Piano Sheet" />
            //     </div>
            //     <div className='form-group mt-3'>
            //                      <input type="text" className='form-control' value={this.state.cover.keyword} placeholder="Please select Keyword" />
            //     </div>
            //                  <Button type='submit' className='btn btn-success mt-4'>Add Sheet</Button>
            //  </div>
//         </React.Fragment>
//     )
// }



















// export default Sheet;
// // export default class AddSheet extends React.Component {



// //     constructor(props) {
// //         super(props);

// //         this.state = {

// //             songName: '',
// //             composer: [],

// //             coverComposer: [],
// //             version: [],
// //             difficulty: "",
// //             coverPublishYear: "",
// //             numberOfPages: "",
// //             pianoSheetUrl: "",
// //             cost: "",
// //             videoLink: "",
// //             reviews: [],
// //             imageUrl: "",
// //             keywords: [],

// //             animaeName: '',
// //             animaeDescription: ''

// //         };

// //         this.handleInputChange = this.handleInputChange.bind(this);
// //     }

// //     handleInputChange(event) {
// //         const target = event.target;
// //         const name = target.name;

// //         if (target.type === 'checkbox') {

// //             this.setState({
// //                 keywords : [target.value]
// //             });


// //         }

// //         else {
// //             const value = target.value;

// //             this.setState({
// //                 [name]: value
// //             });
// //         }
// //     }

// //     add_sheet() {

// //         let mysheet = new Sheet

// //         mysheet.original.songName = this.state.songName;
// //         mysheet.cover.difficulty = this.state.difficulty;

// //         mysheet.cover.pianoSheetUrl = this.state.pianoSheetUrl
// //         mysheet.cover.coverPublishYear = this.state.coverPublishYear

// //         axios.post(`https://3000-anqiii123-project2expre-6ly8p2l74dn.ws-us54.gitpod.io/add_sheet`,
// //             {
// //                 "sheet": mysheet,
// //             })

// //             .then(function (response) {
// //                 console.log(response);

// //             })
// //             .catch(function (error) {
// //                 console.log(error);
// //             });

// //     }


// //     render() {

// //         return (

// //             <React.Fragment>

// //                 <MDBContainer>
// //                     <MDBRow>
// //                         <MDBCol md="6">

// //                             <p className="h4 text-center mb-4">Upload a cover</p>
// //                             <label htmlFor="songName" className="grey-text">
// //                                 songName
// //                             </label>
// //                             <input
// //                                 type="text"
// //                                 id="songName"
// //                                 name="songName"
// //                                 className="form-control"
// //                                 value={this.state.songName}
// //                                 onChange={this.handleInputChange}
// //                             />
// //                             <br />

// //                             <div className="form-group">
// //                                 <label htmlFor="difficulty" className="grey-text">
// //                                     Pick  difficulty ▼
// //                                 </label>


// //                                 <select
// //                                     id="difficulty"
// //                                     name="difficulty"
// //                                     value={this.state.difficulty}
// //                                     onChange={this.handleInputChange}
// //                                     className="form-control"
// //                                 >
// //                                     <option value="Easy">Easy</option>
// //                                     <option value="Normal">Normal</option>
// //                                     <option value="Hard">Hard</option>
// //                                     <option value="Expert">Expert</option>
// //                                 </select>
// //                             </div>

// //                             <label htmlFor="pianoSheetUrl" className="grey-text">
// //                                 pianoSheetUrl
// //                             </label>
// //                             <input
// //                                 type="text"
// //                                 id="pianoSheetUrl"
// //                                 name="pianoSheetUrl"
// //                                 className="form-control"
// //                                 value={this.state.pianoSheetUrl}
// //                                 onChange={this.handleInputChange}
// //                             />
// //                             <br />

// //                             <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
// //                                 coverPublishYear
// //                             </label>
// //                             <input
// //                                 type="text"
// //                                 id="coverPublishYear"
// //                                 name="coverPublishYear"
// //                                 className="form-control"
// //                                 value={this.state.coverPublishYear}
// //                                 onChange={this.handleInputChange}
// //                             />
// //                             <br />


// //                             <label>
// //                                 Beginner friendly:
// //                                 <input
// //                                     name="keywords"
// //                                     type="checkbox"
// //                                     value="Beginner friendly"
// //                                     checked={this.state.keywords.includes("Beginner friendly") }
// //                                     onChange={this.handleInputChange} />
// //                             </label>

// //                             <button onClick={this.add_sheet.bind(this)}>
// //                                 submit
// //                             </button>


// //                         </MDBCol>
// //                     </MDBRow>
// //                 </MDBContainer>



// //             </React.Fragment>
// //         )
// //     }

// // }
