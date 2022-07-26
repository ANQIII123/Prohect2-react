import './homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllSheet from '../component/AllSheet.js';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import AddSheet from './AddSheet';
import SheetDetails from './SheetDetails.js'
import React ,{createRef} from 'react';
import axios from 'axios';
import { Button, Row } from 'react-bootstrap';
import { FaAngleDown } from "react-icons/fa";



export default class Homepage extends React.Component {


  url = "https://3000-anqiii123-project2expre-x3pfoh1qdt5.ws-us54.gitpod.io"


  // state = {
  //   active: 'Homepage'
  // }

  // setActive = (active) => {
  //   this.setState({
  //     'active': active
  //   })
  // }

  // doneAddingSheet = () => {
  //   this.setActive('/addSheet')
  // }

  // renderPage() {
  //   if (this.state.active === '/addSheet') {
  //     return <AddSheet doneAddingSheet={this.doneAddingSheet} />
  //   }
  // }

  constructor(props){
    super(props)
    // this.state={
    //   _feedback:''
    // }
  }

  // let popup = document.getElementById("myPopup");
  // popup.classList.toggle("show");

  render() {
    return (
  
      <React.Fragment>
        <div className="background">
           <div className="allSheetContainer">
            <Row>
              <div className="col-lg-4 offset-sm-1 ">
                {/* <img src="https://i.im.ge/2022/07/26/FhdeoD.png"></img> */}
                <h1 className='bgText'>Welcome to Share.Sheet</h1>
              </div>
            </Row>

            <Row lg={12} style={{ position: 'relative', top: '60vh', justifyContent: 'center', alignItems: 'center', display: 'flex', zIndex: 99 }}>
              <span style={{textAlign: "center", backgroundColor:'rgba(0, 0, 0, 0.45)',color:'white'}} onClick={()=>{document.getElementById('allsheet').scrollIntoView({behavior: "smooth"})}}>View all sheets</span>
              <span style={{textAlign: "center", backgroundColor:'rgba(0, 0, 0, 0.45)',color:'white'}} onClick={()=>{document.getElementById('allsheet').scrollIntoView({behavior: "smooth"})}}><FaAngleDown/></span>
            </Row>


          </div>
        </div>

        <div id="allsheet">




          <AllSheet setActive={this.props.setActive}/>




          {/* <Link to="/addSheet"> addSheet </Link> */}
        </div>
  
        <div className='contact-us'>
           <br />
                <h1>Questions or feedback?</h1>
                <h1>Contact us at:</h1>
                <span>
                < a href="mailto:sharesheet233@gmail.com">
                  <img className="emailLink" src="https://1001freedownloads.s3.amazonaws.com/vector/thumb/64205/simplemail.png"></img>
                </a>
                
              <a href="tel:82375829">
              <img className="phoneLink" src="https://c.tenor.com/ju4PztDv8WcAAAAj/firstrequestrecords-first-request.gif"></img>
              </a>
              </span>
              <h2>sharesheet233@gmail.com   /   +65 82375829</h2>
              </div>
                <div className="anya" style={{ position:"absolute", "right":'100px', bottom: '55px'}}>
                    <Popup trigger={<img style={{"height": "100px","width":"auto"}} src='https://i.im.ge/2022/07/26/FUOHOW.png'></img>} position="top center">
                      <div>Let Anya know your feedbacks!</div>
                      
                            <textarea name="review" rows="5" cols="18"> </textarea>
                            <Button className="btn-outline-dark" onClick={()=>{
                              alert('feedback received')
                            }}>Submit</Button>

                    </Popup>
                  </div>


   
        {/* {this.renderPage()} */}
      </React.Fragment>)
  }
}
