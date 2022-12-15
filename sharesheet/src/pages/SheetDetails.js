
import axios from "axios";
import AllSheet from '../component/AllSheet.js';
import Sheet from "../models/Sheet";
import { Container, Navbar, Form, Button, Modal, Badge } from 'react-bootstrap'
import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2';




export default class SheetDetails extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            sheet: new Sheet,


        }


    }




    componentDidMount() {
        const query = new URLSearchParams(this.props);
        console.log(query)


        axios.post(`https://3000-anqiii123-project2expre-qv7br5s334n.ws-us79.gitpod.io/getSheetById`,
            {
                "id": this.props.sheetid,
            })

            .then(response => {
                console.log(response);
                const _sheet = response.data;
                _sheet.cover.cost = _sheet.cover.cost.$numberDecimal
                this.setState({
                    sheet: _sheet
                });

            })
            .catch(function (error) {
                console.log(error);
            });

    }


    fillCommentsToShow() {

        let avatarurlList = ['https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
            "https://cdn-icons-png.flaticon.com/512/5016/5016137.png"]

        let commentsToShow = []

        this.state.sheet.cover.reviews.forEach(eachReview => {

            commentsToShow.push(
                <div className="reviewBox">
                    <div className="symbol" style={{"alignItems":"center"}}>
                        <Button variant="primary">
                            ✎
                        </Button>{' '}
                        <Button variant="danger">
                            ✕
                        </Button>{' '}
                    </div>
                    <span><img className="profileImg" src={avatarurlList[Math.floor(Math.random() * avatarurlList.length)]}></img></span>
                    <span>{eachReview.user}</span>
                    <h4><span style={{ paddingTop: '40px' }}>{eachReview.rating}</span><span><img className="ratingImg" src="https://www.nicepng.com/png/full/184-1841549_turquoise-cartoon-star-dark-yellow-star-shape-yellow.png"></img></span></h4>
                    <h6>{eachReview.comment}</h6>
                </div>
            )
        });


        return (commentsToShow)
    }

    render() {



        return (

            <React.Fragment>

                <div>
                    <button type="button" className="btn btn-dark"
                        onClick={() => this.props.setActive('HomePage')}
                    >Back</button>
                    <div className="sheetDetails">
                        <div className='detailsContainer'>
                            <h3><Badge className="bg-dark text-light" bg="Secondary">Name:</Badge></h3>
                            <h1 style={{ "fontFamily": "sansSerif", margin: "2px" }}>{this.state.sheet.original.songName}</h1>
                            <h3><Badge className="bg-dark text-light" bg="Secondary">Original:</Badge></h3>
                            <h2 style={{ "fontFamily": "sansSerif", margin: "2px" }}>{this.state.sheet.original.composer && this.state.sheet.original.composer.join("，")}</h2>
                            <h3><Badge className="bg-dark text-light" bg="Secondary">Covered By:</Badge></h3>
                            <h3 style={{ "fontFamily": "sansSerif", margin: "2px" }}>{this.state.sheet.cover.coverComposer && this.state.sheet.cover.coverComposer.join("，")}</h3>
                            <h3><Badge className="bg-dark text-light" bg="Secondary">Pages:</Badge></h3>
                            <h2 style={{ "fontFamily": "sansSerif", margin: "2px" }}>{this.state.sheet.cover.numberOfPages}</h2>
                            <h3><Badge className="bg-dark text-light" bg="Secondary">Difficulty Level:</Badge></h3>
                            <h2 style={{ "fontFamily": "sansSerif", margin: "2px" }}>{this.state.sheet.cover.difficulty}</h2>
                            <h3><Badge className="bg-dark text-light" bg="Secondary">Cost:</Badge></h3>
                            <h2 style={{ "fontFamily": "sansSerif", margin: "2px" }}>{this.state.sheet.cover.cost} SGD</h2>
                            <h3><Badge className="bg-dark text-light" bg="Secondary" >Cover Video:</Badge></h3>
                            <br></br>
                            <iframe width="360" height="200" src={this.state.sheet.cover.videoLink} target="_blank" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



                        </div>

                        <div className='pianoSheetContainer'>
                            <h3 style={{ "fontFamily": "sansSerif" }}>Piano sheet Preview:</h3>
                            <img src={this.state.sheet.cover.pianoSheetUrl} style={{ maxWidth: '100%', maxHeight: '100%' }} />
                            {/* col-4.5 col-s-12 */}
                            <div className="d-flex justify-content-center">

                                <button type="button" onClick={() => Swal.fire(
                                    'Added to cart successfully!',
                                    'よかった！',
                                    'success'
                                )} className="btn btn-lg btn-dark  btn-block" >
                                    <span style={{ "fontFamily": "sansSerif" }} className="dollar" ></span> Buy This!</button>
                            </div>
                            <br></br>
                            <h2><Badge className="bg-dark text-light" bg="Secondary">Reviews: </Badge></h2>



                            {this.fillCommentsToShow()}
                            <Button variant="dark" style={{ "marginRight": "10px" }}>Create New Comment</Button>

                        </div>




                        <div className='animaeRelatedContainer'>
                            <div className="animaeNamePicContainer">
                                <h4><Badge className="bg-dark text-light" bg="Secondary">Anime Name:</Badge></h4>
                                <h1 style={{ "fontFamily": "sansSerif" }}>{this.state.sheet.animaeRelated.animaeName}</h1>
                                <img src={this.state.sheet.cover.imageUrl} style={{ maxWidth: '100%', maxHeight: '100%' }} />
                            </div>
                            <div className="space">

                            </div>
                            <div className='animaeDescContainer'>
                                <h2><Badge className="bg-dark text-light" bg="Secondary">Anime Description:</Badge></h2>

                                <h5 style={{ "lineHeight": "1.7", "fontFamily": "sansSerif" }}>{this.state.sheet.animaeRelated.animaeDescription}</h5>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>

        )
    }
}
