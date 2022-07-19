import React, { Fragment,useEffect, useState  } from "react";
import axios from "axios";
import * as mdb from 'mdb-ui-kit';
import { Input, Label } from 'mdb-ui-kit';
import sheet from "./models/Sheet";
import { Button, Modal, ModalTitle } from "react-bootstrap";
import {
    Link
  } from "react-router-dom";

import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const Sheet = () => {
    const [Data, setData] = useState([]);
    const [RowData, SetRowData] = useState([])
    const [ViewShow, SetViewShow] = useState(false)
    const handleViewShow = () => { SetViewShow(true) }
    const hanldeViewClose = () => { SetViewShow(false) }
    //FOr Edit Model
    const [ViewEdit, SetEditShow] = useState(false)
    const handleEditShow = () => { SetEditShow(true) }
    const hanldeEditClose = () => { SetEditShow(false) }
    //FOr Delete Model
    const [ViewDelete, SetDeleteShow] = useState(false)
    const handleDeleteShow = () => { SetDeleteShow(true) }
    const handleDeleteClose = () => { SetDeleteShow(false) }
    //FOr Add New Data Model
    const [ViewPost, SetPostShow] = useState(false)
    const handlePostShow = () => { SetPostShow(true) }
    const hanldePostClose = () => { SetPostShow(false) }

    //Define here local state that store the form Data
    const [songName, setsongName] = useState("")
    const [composer, setcomposer] = useState("")
    const [difficulty, setdifficulty] = useState("")
    const [pianoSheetUrl, setpianoSheetUrl] = useState("")
    const [keyword, setkeyword] = useState("")

    const [Delete,setDelete] = useState(false)
    //Id for update record and Delete
    const [_id,setId] = useState("");
    const GetSheetData = () => {
        //here we will get all sheet data
        const url = 'https://3000-anqiii123-project2expre-6ly8p2l74dn.ws-us54.gitpod.io/add_sheet'
        axios.get(url)
            .then(res => {
                const result = res.data;
                const { status, message, data } = result;
                if (status !== 'SUCCESS') {
                    alert(message, status)
                }
                else {
                    setData(data)
                    console.log(data)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    const handleSubmite = () => {
        const url = 'https://3000-anqiii123-project2expre-6ly8p2l74dn.ws-us54.gitpod.io/add_sheet'
        const Credentials = { songName, composer, difficulty, pianoSheetUrl, keyword }
        axios.post(url, Credentials)
            .then(response => {
                const result = response.data;
                const { status, message, data } = result;
                if (status !== 'SUCCESS') {
                    alert(message, status)
                }
                else {
                    alert(message)
                    window.location.reload()
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    const handleEdit = () =>{
        const url = `https://3000-anqiii123-project2expre-6ly8p2l74dn.ws-us54.gitpod.io/add_sheet${sheet._id}`
        const Credentials = { songName, composer, difficulty, pianoSheetUrl, keyword }
        axios.put(url, Credentials)
            .then(response => {
                const result = response.data;
                const { status, message } = result;
                if (status !== 'SUCCESS') {
                    alert(message, status)
                }
                else {
                    alert(message)
                    window.location.reload()
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    //handle Delete Function 
    const handleDelete = () =>{
        const url = `https://3000-anqiii123-project2expre-6ly8p2l74dn.ws-us54.gitpod.io/add_sheet${sheet._id}`
        axios.delete(url)
            .then(response => {
                const result = response.data;
                const { status, message } = result;
                if (status !== 'SUCCESS') {
                    alert(message, status)
                }
                else {
                    alert(message)
                    window.location.reload()
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    //call this function in useEffect
    console.log(ViewShow, RowData)
    useEffect(() => {
        GetSheetData();
    }, [])
    return (
        <div>
            <div className='row'>
                <div className='mt-5 mb-4'>
                    <Button variant='primary' onClick={() => { handlePostShow() }}><i className='fa fa-plu'></i>
                        Add New Sheet
                    </Button>
                </div>
            </div>
            <div className='row'>
                <div className='table-responsive'>
                    <table className='table table-striped table-hover table-bordered'>
                        <thead>
                            <tr>
                                <th>songName</th>
                                <th>composer</th>
                                <th>Difficulty</th>
                                <th>Piano Sheet</th>
                                <th>Keyword</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Data.map((sheet) =>
                                <tr key={sheet._id}>
                                    <td>{sheet.original.songName}</td>
                                    <td>{sheet.original.composer}</td>
                                    <td>{sheet.cover.difficulty}</td>
                                    <td>{sheet.cover.pianoSheetUrl}</td>
                                    <td>{sheet.cpver.keyword}</td>
                                    <td style={{ minWidth: 190 }}>
                                        <Button size='sm' variant='primary' onClick={() => { handleViewShow(SetRowData(sheet)) }}>View</Button>|
                                        <Button size='sm' variant='warning' onClick={()=> {handleEditShow(SetRowData(sheet),setId(sheet._id))}}>Edit</Button>|
                                        <Button size='sm' variant='danger' onClick={() => {handleViewShow(SetRowData(sheet),setId(sheet._id), setDelete(true))}}>Delete</Button>|
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* View Modal */}
            <div className='model-box-view'>
                <Modal
                    show={ViewShow}
                    onHide={hanldeViewClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>View Sheets</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                                <input type="text" className='form-control' value={RowData.songName} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="composer" className='form-control' value={RowData.composer} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' value={RowData.difficulty} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' value={RowData.pianoSheetUrl} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' value={RowData.keyword} readOnly />
                            </div>
                            {
                                Delete && (
                                    <Button type='submit' className='btn btn-danger mt-4' onClick={handleDelete}>Delete Sheet</Button>
                                )
                            }
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={hanldeViewClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            {/* Modal for submit data to database */}
            <div className='model-box-view'>
                <Modal
                    show={ViewPost}
                    onHide={hanldePostClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Add new sheet</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                                <input type="text" className='form-control' onChange={(e) => setsongName(e.target.value)} placeholder="Please enter Name" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="composer" className='form-control' onChange={(e) => setcomposer(e.target.value)} placeholder="Please enter composer" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setdifficulty(e.target.value)} placeholder="Please select difficulty" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => pianoSheetUrl(e.target.value)} placeholder="Please upload Piano Sheet" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setkeyword(e.target.value)} placeholder="Please select Keyword" />
                            </div>
                            <Button type='submit' className='btn btn-success mt-4' onClick={handleSubmite}>Add Sheet</Button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={hanldePostClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            {/* Modal for Edit sheet record */}
            <div className='model-box-view'>
                <Modal
                    show={ViewEdit}
                    onHide={hanldeEditClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Sheet Information</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                                <label>Name</label>
                                <input type="text" className='form-control' onChange={(e) => setsongName(e.target.value)} placeholder="Please enter Name" defaultValue={RowData.songName}/>
                            </div>
                            <div className='form-group mt-3'>
                                <label>Composer</label>
                                <input type="composer" className='form-control' onChange={(e) => setcomposer(e.target.value)} placeholder="Please enter composer" defaultValue={RowData.composer} />
                            </div>
                            <div className='form-group mt-3'>
                                <label>Difficulty</label>
                                <input type="text" className='form-control' onChange={(e) => setdifficulty(e.target.value)} placeholder="Please select difficulty" defaultValue={RowData.difficultyr}/>
                            </div>
                            <div className='form-group mt-3'>
                                <label>Piano Sheet</label>
                                <input type="text" className='form-control' onChange={(e) => setpianoSheetUrl(e.target.value)} placeholder="Please upload Piano Sheet" defaultValue={RowData.pianoSheetUrl}/>
                            </div>
                            <div className='form-group mt-3'>
                                <label>Keyword</label>
                                <input type="text" className='form-control' onChange={(e) => setkeyword(e.target.value)} placeholder="Please select Keyword" defaultValue={RowData.keywords}/>
                            </div>
                            <Button type='submit' className='btn btn-warning mt-4' onClick={handleEdit}>Edit Sheet Information</Button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={hanldeEditClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};

export default Sheet;
// export default class AddSheet extends React.Component {



//     constructor(props) {
//         super(props);

//         this.state = {

//             songName: '',
//             composer: [],

//             coverComposer: [],
//             version: [],
//             difficulty: "",
//             coverPublishYear: "",
//             numberOfPages: "",
//             pianoSheetUrl: "",
//             cost: "",
//             videoLink: "",
//             reviews: [],
//             imageUrl: "",
//             keywords: [],

//             animaeName: '',
//             animaeDescription: ''

//         };

//         this.handleInputChange = this.handleInputChange.bind(this);
//     }

//     handleInputChange(event) {
//         const target = event.target;
//         const name = target.name;

//         if (target.type === 'checkbox') {

//             this.setState({
//                 keywords : [target.value]
//             });


//         }

//         else {
//             const value = target.value;

//             this.setState({
//                 [name]: value
//             });
//         }
//     }

//     add_sheet() {

//         let mysheet = new Sheet

//         mysheet.original.songName = this.state.songName;
//         mysheet.cover.difficulty = this.state.difficulty;

//         mysheet.cover.pianoSheetUrl = this.state.pianoSheetUrl
//         mysheet.cover.coverPublishYear = this.state.coverPublishYear

//         axios.post(`https://3000-anqiii123-project2expre-6ly8p2l74dn.ws-us54.gitpod.io/add_sheet`,
//             {
//                 "sheet": mysheet,
//             })

//             .then(function (response) {
//                 console.log(response);

//             })
//             .catch(function (error) {
//                 console.log(error);
//             });

//     }


//     render() {

//         return (

//             <React.Fragment>

//                 <MDBContainer>
//                     <MDBRow>
//                         <MDBCol md="6">

//                             <p className="h4 text-center mb-4">Upload a cover</p>
//                             <label htmlFor="songName" className="grey-text">
//                                 songName
//                             </label>
//                             <input
//                                 type="text"
//                                 id="songName"
//                                 name="songName"
//                                 className="form-control"
//                                 value={this.state.songName}
//                                 onChange={this.handleInputChange}
//                             />
//                             <br />

//                             <div className="form-group">
//                                 <label htmlFor="difficulty" className="grey-text">
//                                     Pick  difficulty ▼
//                                 </label>


//                                 <select
//                                     id="difficulty"
//                                     name="difficulty"
//                                     value={this.state.difficulty}
//                                     onChange={this.handleInputChange}
//                                     className="form-control"
//                                 >
//                                     <option value="Easy">Easy</option>
//                                     <option value="Normal">Normal</option>
//                                     <option value="Hard">Hard</option>
//                                     <option value="Expert">Expert</option>
//                                 </select>
//                             </div>

//                             <label htmlFor="pianoSheetUrl" className="grey-text">
//                                 pianoSheetUrl
//                             </label>
//                             <input
//                                 type="text"
//                                 id="pianoSheetUrl"
//                                 name="pianoSheetUrl"
//                                 className="form-control"
//                                 value={this.state.pianoSheetUrl}
//                                 onChange={this.handleInputChange}
//                             />
//                             <br />

//                             <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
//                                 coverPublishYear
//                             </label>
//                             <input
//                                 type="text"
//                                 id="coverPublishYear"
//                                 name="coverPublishYear"
//                                 className="form-control"
//                                 value={this.state.coverPublishYear}
//                                 onChange={this.handleInputChange}
//                             />
//                             <br />


//                             <label>
//                                 Beginner friendly:
//                                 <input
//                                     name="keywords"
//                                     type="checkbox"
//                                     value="Beginner friendly"
//                                     checked={this.state.keywords.includes("Beginner friendly") }
//                                     onChange={this.handleInputChange} />
//                             </label>

//                             <button onClick={this.add_sheet.bind(this)}>
//                                 submit
//                             </button>


//                         </MDBCol>
//                     </MDBRow>
//                 </MDBContainer>



//             </React.Fragment>
//         )
//     }

// }

