import React from "react";

export default function sheetDetails(props) {
 return (
   <React.Fragment>

    <div>
    <h3>Song Name: {sheet.original.songName}</h3>
    <p>Composer: {sheet.original.composer}</p>
       <div>
          <img src={sheet.cover.pianoSheetUrl} style={{maxWidth:'100%' ,maxHeight:'100%'}}/>
       </div>
    <p>Song Description: {sheet.original.songDescription}</p>
    <p>Price: {sheet.cover.cost}</p>
    <p>Videolink: {sheet.cover.videoLink}</p>
    <p>Rating and comments:{sheet.cover.ratingsComments}</p>
    <p>Animae Name:{sheet.animaeDesc.animaeName}</p>
    <p>Animae Description:{sheet.animaeDesc.animaeDescription}</p>
                                              
    </div>
   </React.Fragment>
 );
}








// import React, { Fragment } from "react";
// import axios from "axios";


// class AllSheet extends React.Component {

//     state = {
//         sheets: []
//     }

//     componentDidMount() {
//         axios.get(`https://3000-anqiii123-project2expre-3xgq0qnngcp.ws-us54.gitpod.io/sheet_details`)
//             .then(res => {
//                 const sheets = res.data;
//                 this.setState({ sheets });
//             })
//     }


//     render() {

//         return (
//             <React.Fragment>



//                 <div className="row mt-2">
//                     {
//                         this.state.sheets
//                             .map(sheet =>
//                                 <div className="col-6 col-lg-4" key={sheet._id}>

//                                     <div className=' sheetBox mx-auto'>
//                                         <div className='sheetPictureBox mx-auto '>
//                                         <img src={sheet.cover.imageUrl} style={{maxWidth:'100%' ,maxHeight:'100%'}}/>
//                                         </div>

//                                         <div className='desc_container'>
//                                             <h5>Song Name: {sheet.original.songName}</h5>
//                                             <p>Composer: {sheet.original.composer}</p>
//                                             <p>Pages: {sheet.cover.numberOfPages}</p>
//                                             <p>Difficulty: {sheet.cover.difficulty}</p>
//                                             <button type="button" class="btn btn-outline-warning">Details</button>
//                                         </div>                                     

//                                     </div>

//                                 </div>

//                             )
//                     }
                                    
//                 </div>

//             </React.Fragment>
//         )
//     }

// }
// export default AllSheet
