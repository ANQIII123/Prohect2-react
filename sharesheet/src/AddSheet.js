import React, { Fragment } from "react";
import axios from "axios";
import * as mdb from 'mdb-ui-kit';
import { Input, Label } from 'mdb-ui-kit';
import Sheet from "./models/Sheet"

import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


export default class AddSheet extends React.Component {



    constructor(props) {
        super(props);

        this.state = {

            songName: '',
            composer: [],

            coverComposer: [],
            version: [],
            difficulty: "",
            coverPublishYear: "",
            numberOfPages: "",
            pianoSheetUrl: "",
            cost: "",
            videoLink: "",
            reviews: [],
            imageUrl: "",
            keywords: [],

            animaeName: '',
            animaeDescription: ''

        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;

        if (target.type === 'checkbox') {

            this.setState({
                keywords : [target.value]
            });


        }

        else {
            const value = target.value;

            this.setState({
                [name]: value
            });
        }
    }

    add_sheet() {

        let mysheet = new Sheet

        mysheet.original.songName = this.state.songName;
        mysheet.cover.difficulty = this.state.difficulty;

        mysheet.cover.pianoSheetUrl = this.state.pianoSheetUrl
        mysheet.cover.coverPublishYear = this.state.coverPublishYear

        axios.post(`https://3000-anqiii123-project2expre-3xgq0qnngcp.ws-us54.gitpod.io/add_sheet`,
            {
                "sheet": mysheet,
            })

            .then(function (response) {
                console.log(response);

            })
            .catch(function (error) {
                console.log(error);
            });

    }


    render() {

        return (

            <React.Fragment>

                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="6">

                            <p className="h4 text-center mb-4">Upload a cover</p>
                            <label htmlFor="songName" className="grey-text">
                                songName
                            </label>
                            <input
                                type="text"
                                id="songName"
                                name="songName"
                                className="form-control"
                                value={this.state.songName}
                                onChange={this.handleInputChange}
                            />
                            <br />

                            <div className="form-group">
                                <label htmlFor="difficulty" className="grey-text">
                                    Pick  difficulty ▼
                                </label>


                                <select
                                    id="difficulty"
                                    name="difficulty"
                                    value={this.state.difficulty}
                                    onChange={this.handleInputChange}
                                    className="form-control"
                                >
                                    <option value="Easy">Easy</option>
                                    <option value="Normal">Normal</option>
                                    <option value="Hard">Hard</option>
                                    <option value="Expert">Expert</option>
                                </select>
                            </div>

                            <label htmlFor="pianoSheetUrl" className="grey-text">
                                pianoSheetUrl
                            </label>
                            <input
                                type="text"
                                id="pianoSheetUrl"
                                name="pianoSheetUrl"
                                className="form-control"
                                value={this.state.pianoSheetUrl}
                                onChange={this.handleInputChange}
                            />
                            <br />

                            <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
                                coverPublishYear
                            </label>
                            <input
                                type="text"
                                id="coverPublishYear"
                                name="coverPublishYear"
                                className="form-control"
                                value={this.state.coverPublishYear}
                                onChange={this.handleInputChange}
                            />
                            <br />


                            <label>
                                Beginner friendly:
                                <input
                                    name="keywords"
                                    type="checkbox"
                                    value="Beginner friendly"
                                    checked={this.state.keywords.includes("Beginner friendly") }
                                    onChange={this.handleInputChange} />
                            </label>

                            <button onClick={this.add_sheet.bind(this)}>
                                submit
                            </button>


                        </MDBCol>
                    </MDBRow>
                </MDBContainer>



            </React.Fragment>
        )
    }

}

