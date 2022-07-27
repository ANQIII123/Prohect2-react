import React, { useState } from 'react';
import { Row, Col, Container, Form, Table, Button } from 'react-bootstrap';
import axios from 'axios';
import { SheetSearchBox } from './SheetSearchBox';
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";


export function EditSheetPage(props) {

    const [sheetList, setSheetList] = useState([]);
    const [refresh, setRefresh] = useState()

    let sheetTable = []

    sheetList.forEach(sheet => {
        sheetTable.push(
            <Row className='mt-5 p-4'>
                <Col>
                    {sheet.cover.original}
                </Col>
                

            </Row>
        )
    });

    const fillTable = () => {

        let tableRowsToShow = []

        if(sheetList === 0){
            return tableRowsToShow
        }

        sheetList.map((sheet,index) => {

            tableRowsToShow.push(
                <tr style ={{fontSize:'1.5vw'}} key={sheet._id}>
                    {/* <td style ={{padding:'2%'}}>{index+1}</td> */}
                    <td style ={{padding:'1%'}}>{sheet.original.songName}</td>
                    <td style ={{padding:'1%'}}>{sheet.animaeRelated.animaeName}</td>
                    <td style ={{padding:'1%'}}>{sheet.cover.cost.$numberDecimal}</td>
                    <td style ={{padding:'1%'}}>{sheet.cover.difficulty}</td>
                    <td><div className="text-center">
                                            <button type="button" className="btn btn-lg btn-outline-dark" 
                                            onClick={()=>this.props.setActive('DetailPage',sheet._id)}
                                            >Details</button>
                                          </div>
                    </td>
                    <td><Button onClick={()=>handleUpdate(sheet._id)}><FaPencilAlt/></Button></td>
                    <td><Button variant='danger' onClick={()=>handleDelete(sheet._id)}><FaTrashAlt /></Button></td>
                </tr>
            )
        });


        return (
            tableRowsToShow
        )

    }

    const handleUpdate =  (_id) =>{
        
        let userAnswer = window.confirm('Confirm update?');
        if(!userAnswer){
            return
        }
        let result = axios.post("https://3000-anqiii123-project2expre-x3pfoh1qdt5.ws-us54.gitpod.io/updatesheet",
        {id: _id})

        if(result.data.acknowledged){
            setRefresh(refresh+1)
            alert(result.data.updateCount+" sheet updated")
        }else{
            alert('unsucessful,please try again')
        }
    }
    
    const handleDelete = async (_id) =>{
        let userAnswer = window.confirm('Confirm delete?');
        if(!userAnswer){
            return
        }

        let result = await axios.post("https://3000-anqiii123-project2expre-x3pfoh1qdt5.ws-us54.gitpod.io/deletesheet",
        {id: _id})

        if(result.data.acknowledged){
            setRefresh(refresh+1)
            alert(result.data.deletedCount+" sheet deleted")
        }else{
            alert('unsucessful please try again')
        }
    }

    return (
        <React.Fragment>
            <Row className='mb-3 md-3'>
                <Col md={10}  className='mx-auto md-3 ' style={{ backgroundColor: 'white' }}>
                    <Row className='mt-5 mb-3'>
                        <SheetSearchBox  outputResult={setSheetList} />
                    </Row>

                    <Row className='md-5' style={{width:'70vw'}}> 
                        <Table striped bordered hover >
                            <thead>
                                <tr className='result-bar'>
                                    {/* <th style={{padding:'0%',fontSize:'2vw'}}>#</th> */}
                                    <th style={{width:'0.5%',fontSize:'2vw'}}>Song Name</th>
                                    <th style={{width:'0.5%',fontSize:'2vw'}}>Anime Name</th>
                                    <th style={{width:'0%',fontSize:'2vw'}}>Cost</th>
                                    <th style={{width:'0%',fontSize:'2vw'}}>Difficulty</th>
                                    {/* <th style={{padding:'0%',fontSize:'2vw'}}>Cover Composer</th> */}
                                    <th style={{width:'0.25%',fontSize:'2vw'}}>Edit</th>
                                    <th style={{width:'0.25%',fontSize:'2vw'}}>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {fillTable()}
                            </tbody>
                        </Table>
                    
                    </Row>
                </Col>
            </Row>

        </React.Fragment>
    )
}
