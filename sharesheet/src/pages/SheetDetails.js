
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


        axios.post(`https://3000-anqiii123-project2expre-x3pfoh1qdt5.ws-us54.gitpod.io/getSheetById`,
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






    //     addReviews= async ()=>{

    //         let newreviews = this.state.reviews;
    //         this.state.sheet.cover.newreviews = this.state.reviews;

    //         let result = await axios.post(this.url + '/reviews',
    //             {
    //                 "reviews": newreviews,
    //             })
    //         console.log(result);

    //         alert('reviews added!')

    //     }

    //     addComment(){
    //         console.log('add comments')
    //         this.setState(this.setState(prevState => ({
    //             commentFields: [...prevState.commentFields,     <Form.Group className="mb-3" key={prevState.composerFields.length}>
    //             <Form.Label>comment: {prevState.commentFields.length+1}</Form.Label>
    //                 <Form.Control type="text" name={'comment'+ prevState.commentFields.length} onChange={(event)=>{
    //                     let newcomment = this.state.comment
    //                     newcomment[prevState.commentFields.length] = event.target.value
    //                     this.setState({comment:newcomment})
    //                     console.log(this.state)
    //                 }}/>
    //             </Form.Group>]
    //           }))

    //         )
    //         console.log(this.state.commentFields)

    //     }

    //     deleteComment(){
    //         this.setState(this.setState(prevState => ({
    //             commentFields:prevState.commentFields.slice(0,-1),
    //             comment:prevState.comment.slice(0,-1)
    //         })))        
    //     }



    render() {

        return (
            <React.Fragment>


                {/* {JSON.stringify(this.state.sheet)} */}
                <div>
                    <button type="button" className="btn btn-dark"
                        onClick={() => this.props.setActive('HomePage')}
                    >Back</button>
                    <div className="sheetDetails">
                        <div className='detailsContainer'>
                            <h5>Name:</h5>
                            <h1>{this.state.sheet.original.songName}</h1>
                            {/* <h1 style={{height:'4rem', marginBottom:'3px'}}>Name: {this.state.sheet.original.songName}</h1> */}
                            <h5>Original:</h5>
                            <h2>{this.state.sheet.original.composer && this.state.sheet.original.composer.join("，")}</h2>
                            <h5>Covered by:</h5>
                            <h3>{this.state.sheet.cover.coverComposer && this.state.sheet.cover.coverComposer.join("，")}</h3>
                            <h5>Number of Pages:</h5>
                            <h2>{this.state.sheet.cover.numberOfPages}</h2>
                            <h5>Difficulty level:</h5>
                            <h2>{this.state.sheet.cover.difficulty}</h2>
                            <h5>Price:</h5>
                            <h2>{this.state.sheet.cover.cost}</h2>

                            <h5>Cover video:</h5>
                            <a href={this.state.sheet.cover.videoLink} target="_blank">
                                <img className="pianoPlay" alt="Piano" src="https://cdn-icons-png.flaticon.com/512/26/26762.png?w=360"></img>
                            </a>
                            <h6>Click to listen!</h6>
                            {/* <p>Rating and comments:{this.state.sheet.cover.reviews}</p> */}
                            {/* col-3 col-s-3  */}

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

                            {/* <div className="reviewBox">        
                        <span><img className="profileImg" src="https://cdn-icons-png.flaticon.com/512/5016/5016137.png"></img></span>
                        <span>Nakao22</span>
                        <h4><span style={{paddingTop:'40px'}}>5</span><span><img className="ratingImg" src="https://www.nicepng.com/png/full/184-1841549_turquoise-cartoon-star-dark-yellow-star-shape-yellow.png"></img></span></h4>
                            <h6>After 4 years, I finally can play this piece. I am so happy that anime music become a motivation for me to play the piano.</h6>
                  </div>
                  <div className="reviewBox">        
                        <span><img className="profileImg" src="https://cdn-icons-png.flaticon.com/512/5016/5016137.png"></img></span>
                        <span>Kazuyuki</span>
                        <h4><span style={{paddingTop:'40px'}}>5</span><span><img className="ratingImg" src="https://www.nicepng.com/png/full/184-1841549_turquoise-cartoon-star-dark-yellow-star-shape-yellow.png"></img></span></h4>
                            <h6>This is just too beautiful, there was a time where I would listen to this song nonstop,
and to this day it seems I never got tired of it</h6>
                  </div> */}
                            <Button className="btn-dark mt-3 margin-left" onClick={() => this.addComment()}>Add comment</Button>
                            {/* <div>
                            <Form.Group>
                                <Form.Label>Post reviews:</Form.Label>
  {this.state.reviewsFields}
                                <br />
    <Button className="btn-dark mt-3 margin-left" onClick={()=>this.addComment()}>Add comment</Button> 
                                <Button className="btn-dark mt-3 margin-left" onClick={()=>this.deleteComment()}>Delete comment</Button>
                                <br />
                                <br />
                                <Button className="btn btn-dark mt-3 btn-lg btn-block" onClick={()=>this.addReviews()}>Post</Button>
                            </Form.Group>
                         </div> */}
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
                            {/* col-4 col-s-9  */}
                        </div>
                    </div>
                </div>

            </React.Fragment>

        )
    }
}
