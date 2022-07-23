
import axios from "axios";
import Sheet from "../models/Sheet";


import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'



export default class SheetDetails extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
             sheet: new Sheet,
        

        }
    }
    


    componentDidMount() {
        const query = new URLSearchParams(this.props);
        console.log(query)


        axios.post(`https://3000-anqiii123-project2expre-x3pfoh1qdt5.ws-us54.gitpod.io/sheet`,
            {   
                "id": this.props.sheetid
            })

            .then(response => {
                console.log(response);
                const sheet = response.data;
                this.setState({
                    sheet
                });

            })
            .catch(function (error) {
                console.log(error);
            });

    }
    render() {


        return (
            <React.Fragment>


                {/* {JSON.stringify(this.state.sheet)} */}
<div>
   <div className="sheetDetails">
         <div className='detailsContainer'>  
                <h5>Song Name:</h5>
                <h1>{this.state.sheet.original.songName}</h1>
                <h5>Composer:</h5>
                <h2>{this.state.sheet.original.composer}</h2>
                <h5>Pages:</h5>
                <h2>{this.state.sheet.cover.numberOfPages}</h2>
                <h5>Difficulty:</h5>
                <h2>{this.state.sheet.cover.difficulty}</h2>
                <h5>Price:</h5>
                <h2>{this.state.sheet.cover.cost}</h2>
                <h5>Cover video:</h5>
                <a href={this.state.sheet.cover.videoLink}>Click To Watch!</a>
                {/* <p>Rating and comments:{this.state.sheet.cover.reviews}</p> */}
                {/* col-3 col-s-3  */}
                                              
         </div>

         <div className='pianoSheetContainer'> 
               <h3>Piano sheet Preview:</h3>
               <img src={this.state.sheet.cover.pianoSheetUrl} style={{maxWidth:'100%' ,maxHeight:'100%'}}/>
               {/* col-4.5 col-s-12 */}
              
         </div>
         
 
         <div className='animaeRelatedContainer'> 
                <div className="animaeNamePicContainer">
                <h4>Animae Name:</h4>
                <h1>{this.state.sheet.animaeRelated.animaeName}</h1>
                <img src={this.state.sheet.cover.imageUrl} style={{maxWidth:'100%' ,maxHeight:'100%'}}/>
                </div>

                <div className='animaeDescContainer'>
                    <h4>Animae Description:</h4>
                    <h5>{this.state.sheet.animaeRelated.animaeDescription}</h5>
                </div>
             {/* col-4 col-s-9  */}
         </div>
   </div>
</div>

            </React.Fragment>

        )
    }

}

// import axios from "axios";
// import Sheet from "./models/Sheet";

// import React, { useState, useEffect, useContext } from 'react'
// import { useParams } from 'react-router-dom'

    

// export default class SheetDetails extends React.Component{
//    constructor(props){
//     super(props);
   
//      this.state = {
//         sheet:new Sheet
//      }
//     }
 
// componentDidMount() {
//     const query = new URLSearchParams(this.props);
//     console.log(query)

//  axios.post("https://3000-anqiii123-project2expre-wy8oi99z9ng.ws-us54.gitpod.io" + "/sheet",
//  {
//         "id": '62cf63dd412536655375749f'
//       })

//         .then(response => {
//             console.log(response);
//             const sheet = response.data;
//             this.setState({
//                 sheet
//             });

//         })
//         .catch(function (error) {
//             console.log(error);
//         });
    
//     return (
//         <React.Fragment>
//             {/* {JSON.stringify(this.state.sheet)} */}
// <div>
// <div className="sheetDetails">
//      <div className='detailsContainer'>  
//             <h5>Song Name:</h5>
//             <h1>{this.state.sheet.original.songName}</h1>
//             <h5>Composer:</h5>
//             <h2>{this.state.sheet.original.composer}</h2>
//             <h5>Pages:</h5>
//             <h2>{this.state.sheet.cover.numberOfPages}</h2>
//             <h5>Difficulty:</h5>
//             <h2>{this.state.sheet.cover.difficulty}</h2>
//             <h5>Price:</h5>
//             <h2>{this.state.sheet.cover.cost}</h2>
//             <h5>Cover video:</h5>
//             <a href={this.state.sheet.cover.videoLink}>Click To Watch!</a>
//             {/* <p>Rating and comments:{this.state.sheet.cover.reviews}</p> */}
//             {/* col-3 col-s-3  */}
                                          
//      </div>

//      <div className='pianoSheetContainer'> 
//            <h3>Piano sheet Preview:</h3>
//            <img src={this.state.sheet.cover.pianoSheetUrl} style={{maxWidth:'100%' ,maxHeight:'100%'}}/>
//            {/* col-4.5 col-s-12 */}
          
//      </div>
     

//      <div className='animaeRelatedContainer'> 
//             <div className="animaeNamePicContainer">
//             <h4>Animae Name:</h4>
//             <h1>{this.state.sheet.animaeRelated.animaeName}</h1>
//             <img src={this.state.sheet.cover.imageUrl} style={{maxWidth:'100%' ,maxHeight:'100%'}}/>
//             </div>

//             <div className='animaeDescContainer'>
//                 <h4>Animae Description:</h4>
//                 <h5>{this.state.sheet.animaeRelated.animaeDescription}</h5>
//             </div>
//          {/* col-4 col-s-9  */}
//      </div>
//   </div>
// </div>

//         </React.Fragment>


//     )
//  }
// }


//     componentDidMount(){
//         axios
//             }
//     return (
// <React.Fragment>
// <div>
//    <div className="sheetDetails">
//          <div className='detailsContainer'>  
//                 <h5>Song Name:</h5>
//                 <h1>{this.state.sheet.original.songName}</h1>
//                 <h5>Composer:</h5>
//                 <h2>{this.state.sheet.original.composer}</h2>
//                 <h5>Pages:</h5>
//                 <h2>{this.state.sheet.cover.numberOfPages}</h2>
//                 <h5>Difficulty:</h5>
//                 <h2>{this.state.sheet.cover.difficulty}</h2>
//                 <h5>Price:</h5>
//                 <h2>{this.state.sheet.cover.cost}</h2>
//                 <h5>Cover video:</h5>
//                 <a href={this.state.sheet.cover.videoLink}>Click To Watch!</a>
//                 {/* <p>Rating and comments:{this.state.sheet.cover.reviews}</p> */}
//                 {/* col-3 col-s-3  */}
                                              
//          </div>

//          <div className='pianoSheetContainer'> 
//                <h3>Piano sheet Preview:</h3>
//                <img src={this.state.sheet.cover.pianoSheetUrl} style={{maxWidth:'100%' ,maxHeight:'100%'}}/>
//                {/* col-4.5 col-s-12 */}
              
//          </div>
         
 
//          <div className='animaeRelatedContainer'> 
//                 <div className="animaeNamePicContainer">
//                 <h4>Animae Name:</h4>
//                 <h1>{this.state.sheet.animaeRelated.animaeName}</h1>
//                 <img src={this.state.sheet.cover.imageUrl} style={{maxWidth:'100%' ,maxHeight:'100%'}}/>
//                 </div>

//                 <div className='animaeDescContainer'>
//                     <h4>Animae Description:</h4>
//                     <h5>{this.state.sheet.animaeRelated.animaeDescription}</h5>
//                 </div>
//              {/* col-4 col-s-9  */}
//          </div>
//    </div>
// </div>

       
//                     </React.Fragment>
//                         )

//                  }
//         )
//    }
//         </React.Fragment>
// )}
 
//  async() => {
//         let response = await axios.post("https://3000-anqiii123-project2expre-wy8oi99z9ng.ws-us54.gitpod.io" + "/sheet",{
//             "id": '62cf63dd412536655375749f'
//         })

//             .then(response => {
//                 console.log(response);
//                 const sheet = response.data;
//                 this.setState({
//                     sheet
//                 });

//             })
//             .catch(function (error) {
//                 console.log(error);
//             });

    

//         return (
//             <React.Fragment>
//                 {/* {JSON.stringify(this.state.sheet)} */}
// <div>
//    <div className="sheetDetails">
//          <div className='detailsContainer'>  
//                 <h5>Song Name:</h5>
//                 <h1>{this.state.sheet.original.songName}</h1>
//                 <h5>Composer:</h5>
//                 <h2>{this.state.sheet.original.composer}</h2>
//                 <h5>Pages:</h5>
//                 <h2>{this.state.sheet.cover.numberOfPages}</h2>
//                 <h5>Difficulty:</h5>
//                 <h2>{this.state.sheet.cover.difficulty}</h2>
//                 <h5>Price:</h5>
//                 <h2>{this.state.sheet.cover.cost}</h2>
//                 <h5>Cover video:</h5>
//                 <a href={this.state.sheet.cover.videoLink}>Click To Watch!</a>
//                 {/* <p>Rating and comments:{this.state.sheet.cover.reviews}</p> */}
//                 {/* col-3 col-s-3  */}
                                              
//          </div>

//          <div className='pianoSheetContainer'> 
//                <h3>Piano sheet Preview:</h3>
//                <img src={this.state.sheet.cover.pianoSheetUrl} style={{maxWidth:'100%' ,maxHeight:'100%'}}/>
//                {/* col-4.5 col-s-12 */}
              
//          </div>
         
 
//          <div className='animaeRelatedContainer'> 
//                 <div className="animaeNamePicContainer">
//                 <h4>Animae Name:</h4>
//                 <h1>{this.state.sheet.animaeRelated.animaeName}</h1>
//                 <img src={this.state.sheet.cover.imageUrl} style={{maxWidth:'100%' ,maxHeight:'100%'}}/>
//                 </div>

//                 <div className='animaeDescContainer'>
//                     <h4>Animae Description:</h4>
//                     <h5>{this.state.sheet.animaeRelated.animaeDescription}</h5>
//                 </div>
//              {/* col-4 col-s-9  */}
//          </div>
//    </div>
// </div>

//             </React.Fragment>

//         )

