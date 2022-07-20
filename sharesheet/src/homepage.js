import './homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import AllSheet from './AllSheet.js';
import AddSheet from './AddSheet';
import SheetDetails from './SheetDetails.js'
import React from 'react';
import {Link} from "react-router-dom";



class Homepage extends React.Component {
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

        <AllSheet />
        {/* <Link to="/addSheet"> addSheet </Link> */}
      </React.Fragment>
    )
  }
}

export default Homepage;