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
            let url="https://3000-anqiii123-project2expre-qv7br5s334n.ws-us77.gitpod.io";
            
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

                                <div className="col-12 col-lg-6 mt-2 mb-1" style={{padding:'40px'}} key={sheet._id}>

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
                </div>

            </React.Fragment>
            )
    }
}
 
 