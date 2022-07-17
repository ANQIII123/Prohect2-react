import React, { Fragment } from "react";
import axios from "axios";
import * as mdb from 'mdb-ui-kit';
import { Input, Label } from 'mdb-ui-kit';

import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";


export default class AddSheet extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            songName: 'my test cover',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    add_sheet() { 
        
        this.songName

    }



    render() {


        return (

            <React.Fragment>

                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="6">
                            <form onSubmit={this.add_sheet}>
                                <p className="h4 text-center mb-4">Upload a cover</p>
                                <label htmlFor="songName" className="grey-text">
                                    Your name
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
                                <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    id="defaultFormContactEmailEx"
                                    className="form-control"
                                />
                                <br />
                                <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="defaultFormContactSubjectEx"
                                    className="form-control"
                                />
                                <br />

                                <input type="submit" />

                            </form>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>



            </React.Fragment>
        )
    }

}

