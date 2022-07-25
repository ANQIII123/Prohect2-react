import React, { useState } from 'react';
import { Row, Col, Container, Form, Table } from 'react-bootstrap';
import axios from 'axios';
import Sheet from '../models/Sheet';
import { SheetSearchBox } from './SheetSearchBox';


export function DeleteSheetPage(props) {

    const [sheetList, setSheetList] = useState([])

    let sheetTable=[]

    sheetList.forEach(sheet => {
        sheetTable.push(
            <Row className='mt-5 p-4'>
                <Col>
                    {sheet.cover.original}
                
                </Col>

            </Row>
        )
        
    });

    return (
        <React.Fragment>
            <Row>
                <Col md={10} className='mx-auto' style={{ backgroundColor: 'white' }}>
                    <Row className='mt-5 p-4'>
                        <SheetSearchBox outputResult={setSheetList} />
                    </Row>
                </Col>
            </Row>
            
            <Row>

            </Row>


            {JSON.stringify(sheetList)}

        </React.Fragment>
    )


}
