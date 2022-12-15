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
    const [limit, setLimit] = useState(20);
    const [maxCost, setMaxCost] = useState()


    const searchOne = async () => {
        console.log('search clicked')

        console.log(difficulty)

        let response = await axios.post(`https://3000-anqiii123-project2expre-qv7br5s334n.ws-us79.gitpod.io/getsheet`,
            {
                keyword: keyword,
                limit: parseInt(limit),
                difficulty: difficulty,
                maxCost: parseFloat(maxCost)
            })

        let sheetList = response.data

        console.log(JSON.stringify(sheetList))

        props.outputResult(sheetList)

    }



    return (
        <React.Fragment >
            <Row  style={{ width: '100%', margin:'2px'}}>
                <Col md={2}>
                    <Form.Select className='mb-3' onChange={e => setSearchType(e.target.value)}>
                        <option value="any">Song/Anime Name</option>
                        <option value="songName">Original Song Name</option>
                        <option value="animaeName">Anime Name</option>
                    </Form.Select>
                </Col>

                <Col md={2}>
                    <Form.Select className='mb-3' onChange={e => setDifficulty(e.target.value)}>             
                        <option value="">All difficulty</option>
                        <option value="Normal">Normal</option>
                        <option value="Easy">Easy</option>
                        <option value="Hard">Hard</option>
                        <option value="Expert">Expert</option>
                    </Form.Select>
                </Col>

                <Col md={1}>
                    <MDBInput className='mb-3' label='Return Number' value={limit} onChange={e => setLimit(e.target.value)}></MDBInput>
                </Col>

                <Col md={1}>
                    <MDBInput className='mb-3' label='set Max Cost' onChange={e => setMaxCost(e.target.value)}></MDBInput>
                </Col>
            
                <Col md={4}>
                    <MDBInput className='mb-3' label='Enter keyword' onChange={e => setKeyword(e.target.value)}></MDBInput>
                </Col>

                <Col md={1}>
                    <Button variant="dark" onClick={() => { searchOne() }}><FaSearch /></Button>
                </Col>


            </Row>
        </React.Fragment>
    )
}