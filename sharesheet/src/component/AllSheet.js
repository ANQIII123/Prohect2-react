import React, { Fragment } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Badge } from 'react-bootstrap'



export default class AllSheet extends React.Component {


    state = {
        sheets: [],
        data: [
        ],
    }


    componentDidMount() {
        let url = "https://3000-anqiii123-project2expre-qv7br5s334n.ws-us79.gitpod.io";

        axios.get(url + `/get_all_sheet`)
            .then(res => {
                const sheets = res.data;
                this.setState({ sheets: sheets });
            })
    }


    render() {
        return (
            <React.Fragment>

                <div className="row px-3" style={{ "marginLeft": "6vw", "marginRight": "6vw" }} >
                    {
                        this.state.sheets
                            .map(sheet =>


                                //     <Card style={{ width: '18rem' }}>
                                //     <Card.Img variant="top" src="holder.js/100px180" />
                                //     <Card.Body>
                                //       <Card.Title>Card Title</Card.Title>
                                //       <Card.Text>
                                //         Some quick example text to build on the card title and make up the
                                //         bulk of the card's content.
                                //       </Card.Text>
                                //       <Button variant="primary">Go somewhere</Button>
                                //     </Card.Body>
                                //   </Card>

                                <div className="col-12 col-lg-4 mt-4 mb-1" style={{ padding: '10px' }} key={sheet._id}>

                                    <div className='sheetBox mx-auto' >

                                        <div className='sheetPictureBox mx-auto '>

                                            <img src={sheet.cover.imageUrl} style={{ maxWidth: '100%', maxHeight: '100%', }} />
                                        </div>

                                        <div className='desc_container'>
                                            <div className="desc_text">
                                                <Badge bg="warning" text="dark">
                                                    {sheet.cover.coverPublishYear}
                                                </Badge>{' '}
                                                <Badge bg="info">
                                                    {sheet.cover.numberOfPages} Pgs
                                                </Badge>{'  '}
                                                <Badge bg="success">
                                                    {sheet.cover.difficulty}
                                                </Badge>{'  '}


                                                <Row><h2 style={{ height: '5rem', marginBottom: '5px', marginTop: '4px', fontWeight: 'bold', fontFamily: 'sansSerif' }}> 『 {sheet.original.songName} 』</h2></Row>
                                                <p>Original:   {sheet.original.composer}</p>
                                                {/* <p>Original:   {sheet.cover.keywords}</p> */}
                                            </div>
                                            <div className="text-center">
                                                <button type="button" className="btn btn-lg btn-outline-dark"
                                                    onClick={() => this.props.setActive('DetailPage', sheet._id)}
                                                >Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                    }
                </div>

            </React.Fragment>
        )
    }
}

