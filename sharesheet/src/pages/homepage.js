import './homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllSheet from '../component/AllSheet.js';
import AddSheet from './AddSheet';
import SheetDetails from './SheetDetails.js'
import React ,{createRef} from 'react';
import { Link } from "react-router-dom";
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
  }


  render() {
    return (
      <React.Fragment>
        <div className="background">
           <div className="allSheetContainer">
            <Row>
              <div className="col-lg-4 offset-sm-1 ">
                <h1 className='bgText'>Welcome to ShareSheet</h1>
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

        {/* {this.renderPage()} */}
      </React.Fragment>)
  }
}
