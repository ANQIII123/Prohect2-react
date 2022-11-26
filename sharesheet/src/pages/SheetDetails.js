
import axios from "axios";
import AllSheet from '../component/AllSheet.js';
import Sheet from "../models/Sheet";
import { Container, Navbar, Form, Button } from 'react-bootstrap'
import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'



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


        axios.post(`https://3000-anqiii123-project2expre-x88mcsdunmi.ws-us77.gitpod.io/getSheetById`,
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
                            <h5>Name:</h5>
                            <h1>{this.state.sheet.original.songName}</h1>
                            <h5>Original:</h5>
                            <h2>{this.state.sheet.original.composer && this.state.sheet.original.composer.join("，")}</h2>
                            <h5>Covered by:</h5>
                            <h3>{this.state.sheet.cover.coverComposer && this.state.sheet.cover.coverComposer.join("，")}</h3>
                            <h5>Number of Pages:</h5>
                            <h2>{this.state.sheet.cover.numberOfPages}</h2>
                            <h5>Difficulty level:</h5>
                            <h2>{this.state.sheet.cover.difficulty}</h2>
                            <h5>Price:</h5>
                            <h2>{this.state.sheet.cover.cost}SGD</h2>

                            <h5>Cover video:</h5>
                            <a href={this.state.sheet.cover.videoLink} target="_blank">
                                <img className="pianoPlay" alt="Piano" src="https://cdn-icons-png.flaticon.com/512/26/26762.png?w=360"></img>
                            </a>
                            <h6>Click to listen!</h6>
                           
                        </div>

                        <div className='pianoSheetContainer'>
                            <h3>Piano sheet Preview:</h3>
                            <img src={this.state.sheet.cover.pianoSheetUrl} style={{ maxWidth: '100%', maxHeight: '100%' }} />
                            {/* col-4.5 col-s-12 */}
                            <div className="d-flex justify-content-center">

                                <button type="button" className="btn btn-lg btn-dark  btn-block" >
                                    <span className="dollar">&#36;</span> Buy This!</button>
                            </div>
                            <h2>Reviews:</h2>

                            {this.fillCommentsToShow()}

                        </div>




                        <div className='animaeRelatedContainer'>
                            <div className="animaeNamePicContainer">
                                <h4>Animae Name:</h4>
                                <h1>{this.state.sheet.animaeRelated.animaeName}</h1>
                                <img src={this.state.sheet.cover.imageUrl} style={{ maxWidth: '100%', maxHeight: '100%' }} />
                            </div>
                            <div className="space">

                            </div>
                            <div className='animaeDescContainer'>
                                <h2>Anime Description:</h2>

                                <h5>{this.state.sheet.animaeRelated.animaeDescription}</h5>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>

        )
    }
}
