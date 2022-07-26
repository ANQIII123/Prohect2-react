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

        sheetList.forEach((sheet,index) => {

            tableRowsToShow.push(
                <tr key={sheet._id}>
                    <td>{index+1}</td>
                    <td>{sheet.original.songName}</td>
                    <td>{sheet.animaeRelated.animaeName}</td>
                    <td>{sheet.cover.cost.$numberDecimal}</td>
                    <td>{sheet.cover.difficulty}</td>
                    <td>{sheet.cover.coverComposer[0]}</td>
                    <td><Button><FaPencilAlt/></Button></td>
                    <td><Button variant='danger' onClick={()=>handleDelete(sheet._id)}><FaTrashAlt /></Button></td>
                </tr>
            )

        });


        return (
            tableRowsToShow
        )

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
            <Row>
                <Col md={10} className='mx-auto' style={{ backgroundColor: 'white' }}>
                    <Row className='mt-5 p-4'>
                        <SheetSearchBox outputResult={setSheetList} />
                    </Row>

                    <Row>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Song Name</th>
                                    <th>Animae Name</th>
                                    <th>Cost</th>
                                    <th>Difficulty</th>
                                    <th>Cover Composer</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
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
