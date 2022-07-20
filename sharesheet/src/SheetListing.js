import React from "react";
import { Button } from "bootstrap";

export default function Listing(props) {
    return (
        <React.Fragment>
        <h1>Sheet Listing</h1>
      {
        props.data.map(
            Sheet =>{
                return(
                    <React.Fragment>
      <div>
         <div className='form-group' key={sheet._id}>
           <div className="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
          </div>
                    </React.Fragment>  
                )
            }
        )
      }  
        </React.Fragment>
    );

}
