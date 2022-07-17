
import axios from "axios";
import Sheet from "./models/Sheet";


import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'


    


export default class AddSheet extends React.Component {


    constructor(props) {
        super(props);

        this.state = {

            sheet: new Sheet
        }
    }
    


    componentDidMount() {
        const query = new URLSearchParams(this.props);
        console.log(query)


        axios.post(`https://3000-anqiii123-project2expre-3xgq0qnngcp.ws-us54.gitpod.io/sheet`,
            {
                "id": '62d41722956a48cb7bef302b'
            })

            .then(response => {
                console.log(response);
                const sheet = response.data;
                this.setState({
                    sheet
                });

            })
            .catch(function (error) {
                console.log(error);
            });

    }
    render() {


        return (
            <React.Fragment>

                hello

                {/* {JSON.stringify(this.state.sheet)} */}

                <h5>Song Name: {this.state.sheet.original.songName}</h5>
                <p>Composer: {this.state.sheet.original.composer}</p>
                <p>Pages: {this.state.sheet.cover.numberOfPages}</p>
                <p>Difficulty: {this.state.sheet.cover.difficulty}</p>



            </React.Fragment>

        )
    }

}