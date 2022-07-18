import React, { Fragment } from "react";
import axios from "axios";
import {
    Link
  } from "react-router-dom";


class AllSheet extends React.Component {

    state = {
        sheets: []
    }

    componentDidMount() {
        
        axios.get(`https://3000-anqiii123-project2expre-j3zttqrvpmp.ws-us54.gitpod.io/get_all_sheet`)
            .then(res => {
                const sheets = res.data;
                this.setState({ sheets });
            })
    }


    render() {

        return (
            <React.Fragment>



                <div className="row">
                    {
                        this.state.sheets
                            .map(sheet =>
                                <div className="col-6 col-lg-4 mt-2 mp-2" key={sheet._id}>

                                    <div className=' sheetBox mx-auto'>
                                        <div className='sheetPictureBox mx-auto '>
                                        <img src={sheet.cover.imageUrl} style={{maxWidth:'100%' ,maxHeight:'100%'}}/>
                                        </div>

                                        <div className='desc_container'>
                                            <h5>Song Name: {sheet.original.songName}</h5>
                                            <p>Composer: {sheet.original.composer}</p>
                                            <p>Pages: {sheet.cover.numberOfPages}</p>
                                            <p>Difficulty: {sheet.cover.difficulty}</p>

                                            <Link to={{pathname: `/sheetdetails/${sheet._id}`}}>
                                            <button type="button" className="btn btn-outline-warning" >Details</button>
                                            </Link>
                        
                                        </div>                                     

                                    </div>

                                </div>

                            )
                    }
                                        <div className='pagination'>
                                                 <nav aria-label="Page navigation example">
                                                     <ul className="pagination">
                                                    <li className="page-item"><a className="page-link" href="#">《</a></li>
                                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                    <li className="page-item"><a className="page-link" href="#">》</a></li>
                                                       </ul>
                                                </nav>
                                        </div>
                </div>

            </React.Fragment>
        )
    }

}
export default AllSheet
