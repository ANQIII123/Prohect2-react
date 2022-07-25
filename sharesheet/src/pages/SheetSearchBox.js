import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { MDBInput } from "mdb-react-ui-kit"
import axios from 'axios';
import './AddSheet.css';
import { FaSearch } from 'react-icons/fa';

export function SheetSearchBox(props) {

    const [searchType, setSearchType] = useState('');
    const [keyword, setKeyword] = useState('');
    const [difficulty, setDifficulty] = useState('')
    const [limit, setLimit] = useState(5);
    const [maxCost, setMaxCost] = useState()


    const searchOne = async () => {
        console.log('search clicked')

        let response = await axios.post(`https://3000-anqiii123-project2expre-x3pfoh1qdt5.ws-us54.gitpod.io/getsheet`,
            {
                keyword:keyword,
                limit:parseInt(limit),
                difficulty:difficulty,
                maxCost:parseFloat(maxCost)
            })

        let sheetList = response.data

        console.log(JSON.stringify(sheetList))

        props.outputResult(sheetList)

    }



    return (
        <React.Fragment >
            <Row style={{ width: '100%' }}>
                <Col md={2}>
                    <Form.Select onChange={e => setSearchType(e.target.value)}>
                        <option value="">Search by</option>
                        <option value="songName">Original Song Name</option>
                        <option value="animaeName">Animae Name</option>
                        <option value="any">In either Name</option>
                    </Form.Select>
                </Col>

                <Col md={4}>
                    <MDBInput label='Enter search keyword' onChange={e => setKeyword(e.target.value)}></MDBInput>
                </Col>

                <Col md={1}>
                    <Button onClick={() => { searchOne() }}><FaSearch /></Button>
                </Col>

                <Col md={2}>
                    <Form.Select onChange={e => setDifficulty(e.target.value)}>
                        <option value="Normal">Normal</option>
                        <option value="Easy">Easy</option>
                        <option value="Hard">Hard</option>
                        <option value="Expert">Expert</option>
                    </Form.Select>
                </Col>

                <Col md={1}>
                    <MDBInput label='Return Number' onChange={e => setLimit(e.target.value)}></MDBInput>
                </Col>

                <Col md={1}>
                    <MDBInput label='set Max Cost' onChange={e => setMaxCost(e.target.value)}></MDBInput>
                </Col>


            </Row>
        </React.Fragment>
    )
}