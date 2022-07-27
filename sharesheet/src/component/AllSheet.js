import React, { Fragment } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from 'react-bootstrap'



 export default class AllSheet extends React.Component { 
  

    state = {
        sheets: [],
        data:[            
        ],
    }


        componentDidMount() {
            let url="https://3000-anqiii123-project2expre-x3pfoh1qdt5.ws-us54.gitpod.io";
            
            axios.get(url+`/get_all_sheet`)
                .then(res => {
                    const sheets = res.data;
                    this.setState({ sheets:sheets });
                })
        }
    

        render(){
            return(
            <React.Fragment>
    
                <div className="row px-3" >
                    {
                        this.state.sheets
                            .map(sheet =>
          
                                <div className="col-6 col-lg-4 mt-2 mb-1" style={{padding:'0px'}} key={sheet._id}>

                                    <div className='sheetBox mx-auto' >
                            
                                        <div className='sheetPictureBox mx-auto '>
                                        <img src={sheet.cover.imageUrl} style={{maxWidth:'100%' ,maxHeight:'100%'}}/>
                                        </div>

                                        <div className='desc_container'>
                                          <div  className="desc_text">
                                            <Row><h4 style={{ height:'3rem', marginBottom:'4px',fontWeight:'bold'}}>Name: {sheet.original.songName}</h4></Row>
                                            <p>Covered by: {sheet.cover.coverComposer.join("，")}</p>
                                            <p>Original:   {sheet.original.composer}</p>
                                            <p>Pages:      {sheet.cover.numberOfPages}</p>
                                            <p>Difficulty: {sheet.cover.difficulty}</p>
                                          </div>
                                          <div className="text-center">
                                            <button type="button" className="btn btn-lg btn-outline-dark" 
                                            onClick={()=>this.props.setActive('DetailPage',sheet._id)}
                                            >Details</button>
                                          </div>
                                        </div>                                     
                                    </div>
                                </div>
                            )
                    }
                                        {/* <div className='pagination'>
                                                 <nav aria-label="Page navigation example">
                                                     <ul className="pagination">
                                                    <li className="page-item"><a className="page-link" href="#">《</a></li>
                                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                    <li className="page-item"><a className="page-link" href="#">》</a></li>
                                                       </ul>
                                                </nav>
                                        </div> */}
                </div>

            </React.Fragment>
            )
    }
}
 