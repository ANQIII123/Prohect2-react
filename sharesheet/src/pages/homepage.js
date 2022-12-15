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


  url = "https://3000-anqiii123-project2react-n60f0qeeiv7.ws-us79.gitpod.io"


  constructor(props){
    super(props)


    function Example() {
      const [show, setShow] = useState(false);
    
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
    
      return (
        
  }


  render() {
    return (
  
      <React.Fragment>
        <div className="background">
           <div className="allSheetContainer">
            <Row>
              <div className="col-lg-4 offset-sm-2 ">
                
                {/* <img src="https://i.im.ge/2022/07/26/FhdeoD.png"></img> */}
                <h1 className='bgText'>Welcome to <br></br> Anime.Music Score</h1>
                
              </div>
            </Row>

            <Row lg={12} >
              <div className='scroll_area'>
                    <div style={{textAlign: "center",color:'white'}} onClick={()=>{document.getElementById('allsheet').scrollIntoView({behavior: "smooth"})}}>Browse For Scores</div>
                    <span className="box-animate" style={{marginTop:"40px",textAlign: "center",backgroundColor:'rgba(255, 255, 255, 0)',color:'white'}} onClick={()=>{document.getElementById('allsheet').scrollIntoView({behavior: "smooth"})}}><FaAngleDown/></span>
              </div>
            </Row>


          </div>
        </div>

        <div id="allsheet" style={{position:"relative"}}>

          <div id="tutorial" style={{position:"absolute"}}>
        
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

render(<Example />);
          </div>
          <AllSheet setActive={this.props.setActive}/>
           

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
                {/* <div className="anya" style={{ height:"100%", position:"absolute", "right":'100%', bottom: '5px'}}>
                    <Popup trigger={<img style={{"height": "100%","width":"auto"}} src='https://iili.io/HoMNvs4.md.png'></img>}>
                      <div>Let Anya know your feedbacks!</div>
                      
                            <textarea name="review" rows="5" cols="18"> </textarea>
                            <Button className="btn-outline-dark" onClick={()=>{
                              alert('feedback received')
                            }}>Submit</Button>

                    </Popup>
                  </div> */}


        </React.Fragment>)
  }
}
