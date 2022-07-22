import React from 'react';
import { Button } from "bootstrap";
import axios from 'axios';


export default class AddSheet extends React.Component {

    url = "https://3000-anqiii123-project2expre-wy8oi99z9ng.ws-us54.gitpod.io/"

    state = {
        'newsongName': '',
        'newcomposer': [],
        'newpianoSheetUrl':'',
        'newdifficulty':'',
    }

    updateFormField = (s) => {
        this.setState({
            [s.target.name]: s.target.value
        })
      } 
  render(){    
    return (
        <React.Fragment>
            <h1>Add Sheet</h1>
                 <div className='form-group'>
                        <input 
                        type="text" 
                        className='form-control'
                        value={this.state.original.newsongName} 
                        placeholder="Please enter Song Name"
                        onChange={this.updateFormField}/>
                  </div>
                  <div className='form-group mt-3'>
                         <input
                          type="composer" 
                          className='form-control'
                          value={this.state.original.newcomposer}
                          placeholder="Please enter song composer"
                          onChange={this.updateFormField}/>
                  </div>
                  <div className='form-group mt-3'>
                         <input 
                         type="text" 
                         className='form-control' 
                         value={this.state.cover.newpianoSheetUrl} 
                         placeholder="Please select difficulty" 
                         onChange={this.updateFormField}/>
                  </div>
                 <div className='form-group mt-3'>
                         <label 
                         htmlFor="difficulty" 
                         value={this.state.cover.newdifficulty}
                         onChange={this.updateFormField}
                         className="grey-text">Pick  difficulty ▼</label>
                             <select
                                     name="difficulty"
                                     className="form-control">
                                 <option value="Easy">Easy</option>
                                 <option value="Normal">Normal</option>
                                 <option value="Hard">Hard</option>
                                 <option value="Expert">Expert</option>
                             </select>

                             <button className="btn btn-primary mt-3" onClick={this.addSheet}>Add New Sheet</button>
                </div>
        </React.Fragment>
    )
  }
  addSheet=async ()=>{
    await axios.post(this.url + 'sheet',{
        'songName': this.state.original.newsongName,
        'composer': this.state.original.newcomposer,
        'pianoSheetUrl':this.state.cover.newpianoSheetUrl,
        'difficulty':this.state.cover.newdifficulty
    })
    
    this.props.doneAddingSheet();
   }
}




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
