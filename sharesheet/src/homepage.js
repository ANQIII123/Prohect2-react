import './homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import AllSheet from './AllSheet.js';
import { Button } from "bootstrap";
import AddSheet from './AddSheet';
import SheetDetails from './SheetDetails.js'
import React from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';


export default class Homepage extends React.Component {
url = "https://3000-anqiii123-project2expre-wy8oi99z9ng.ws-us54.gitpod.io"

state = {
  'active': '/addSheet'
}

setActive= (active) => {
  this.setState({
      'active': active
  })
}

doneAddingSheet = () => {
  this.setActive('/addSheet')
}

renderPage() {
 if (this.state.active === '/addSheet') {
      return <AddSheet doneAddingSheet={this.doneAddingSheet} />
  }
}


  render() {
    return (
      <React.Fragment>
        <div className="background">
         <div className="allSheetContainer">
          <div className="row">
            <div className="col-lg-4 offset-sm-1 ">
              <h4 className='bgText'>Welcome to ShareSheet</h4>
              
            </div>
          </div>
         </div>
        </div>
         <div>
         <div className="searchPlace">
                                                    <MDBInputGroup>
                                                    <MDBInput label='Search' />
                                                    <MDBBtn rippleColor='dark'>
                                                    <MDBIcon icon='search' />
                                                    </MDBBtn>
                                            </MDBInputGroup>
                                    </div> 
           <AllSheet />
                <button className="nav-link" onClick={()=>{
                        this.setActive('/AddSheet')
                      }}>
                  Upload Sheet
                 </button>

        {/* <Link to="/addSheet"> addSheet </Link> */}
        </div>
        {/* {this.renderPage()} */}
      </React.Fragment>)
}}
