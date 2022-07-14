import React, { Fragment } from "react";
import axios from "axios";


class AllSheet extends React.Component {

    state = {
        sheets: []
    }

    componentDidMount() {
        axios.get(`https://3000-anqiii123-project2expre-3xgq0qnngcp.ws-us54.gitpod.io/get_all_sheet`)
            .then(res => {
                const sheets = res.data;
                this.setState({ sheets });
            })
    }


    render() {

        return (
            <React.Fragment>



                <div className="row mt-2">
                    {
                        this.state.sheets
                            .map(sheet =>
                                <div className="col-6 col-lg-4" key={sheet._id}>

                                    <div className=' sheetBox mx-auto'>
                                        <div className='sheetPictureBox mx-auto '>
                                        <img src={sheet.cover.imageUrl} style={{maxWidth:'100%' ,maxHeight:'100%'}}/>
                                        </div>

                                        <div className='desc_container'>
                                            <h5>Song Name: {sheet.original.songName}</h5>
                                            <p>Composer: {sheet.original.composer}</p>
                                            <p>Pages: {sheet.cover.numberOfPages}</p>
                                            <p>Difficulty: {sheet.cover.difficulty}</p>
                                            <button type="button" class="btn btn-outline-warning">Details</button>
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

export default AllSheet
