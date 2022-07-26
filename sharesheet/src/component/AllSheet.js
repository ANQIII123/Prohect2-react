import React, { Fragment } from "react";
import axios from "axios";

// import AllSheet from "./AllSheet";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from 'react-bootstrap'
// import sheet from "/sheet"



 export default class AllSheet extends React.Component { 
  

    state = {
        sheets: [],
        data:[            
        ],
    }

    //     setActive  = (active) => {
    //         this.setState({
    //             'active': active
    //         })
    //     }
       
    //     doneAddingSheet = () => {
    //         this.setActive('/sheet')
    //     }

        componentDidMount() {
            let url="https://3000-anqiii123-project2expre-x3pfoh1qdt5.ws-us54.gitpod.io";
            
            axios.get(url+`/get_all_sheet`)
                .then(res => {
                    const sheets = res.data;
                    this.setState({ sheets:sheets });
                })
        }
    
    
        // renderPage() {
        //     if (this.state.active === '/sheetDetails') {
        //         return <SheetDetails/>
        //     } else if (this.state.active === '/addSheet') {
        //         return <AddSheet doneAddingSheet={this.doneAddingSheet} />
        //     }
        // }

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
                                            <p>Original: {sheet.original.composer}</p>
                                            <p>Pages: {sheet.cover.numberOfPages}</p>
                                            <p>Difficulty: {sheet.cover.difficulty}</p>
                                          </div>
                                            <button type="button" className="btn btn-outline-dark" 
                                            onClick={()=>this.props.setActive('DetailPage',sheet._id)}
                                            >Details</button>
                                        </div>                                     
                                    </div>
                                </div>
                            )
                    }
                                        <div className='pagination'>
                                                 <nav aria-label="Page navigation example">
                                                     <ul className="pagination">
                                                    <li className="page-item"><a className="page-link" href="#">《</a></li>
                                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                    <li className="page-item"><a className="page-link" href="#">》</a></li>
                                                       </ul>
                                                </nav>
                                        </div>
                </div>

            </React.Fragment>
            )
    }
}
    //         return (
    //         <div className="allSheetContainer">
    //           <ul className="nav nav-tabs">
    //               <li className="nav-item">
    //                   <button className="nav-link"
    //                   onClick ={() =>{
    //                      this.setActive('/sheetDetails')
    //                         }}>
    //                     Details
    //                  </button>
    //              </li>
    //           </ul>
    //           <button className="nav-link" onClick={()=>{
    //                     this.setActive('/addSheet')
    //                 }}>
    //               Add Sheet
    //              </button>
    //          {this.renderPage()}
    //         </div>
    //     )
    //   }


//     async componentDidMount(){
//         let response = await axios.get(this.url + "/get_all_sheet");
//       this.setState({
//        'data':response.data
//    })
// }

// renderPage(){
//     if(this.state.active === '/sheetDetails'){
//         return <Sheet data={this.state.data} />
//     }else if(this.state.active === '/addSheet'){
//     return<AddSheet processAddSheet={this.state.addSheet}/>
//    }
// }

// setActive(page){
// this.setState({
//     'active':page
//  })
// }
//    processAddSheet = async () => {

//     try {
//         let response = await axios.post(this.url + '/addSheet',{
//             'songName': this.state.original.songName,
//             'composer': this.state.original.composer.split(',')
//         })

//         // 2. we update React and the new recipe object will have the _id of the database
//         const newSheet = {
//             _id: response.data.ObjectId,
//             title: this.state.original.songName,
//             ingredients: this.state.original.composer.split(',')
//         }

//         this.setState({
//             'data': [...this.state.data, newSheet],
//             'active': '/get_all_sheet'
//         })

//     } catch(e) {
//         alert("Error adding new sheet, please contact administrator");
//     }

    // renderPage() {
    //     if(this.state.active === '/get_all_sheet'){
    //         return <AllSheet data={this.state.sheet} />
    //     }else if(this.state.active === 'addSheet'){
    //     return<AddSheet
    //            newsongName={this.state.original.songName}
    //            newComposer={this.state.original.composer}
    //            updateFormField={(key, value)=>{
    //                         this.setState({
    //                             [key]: value
    //                         })
    //                     }}
    //                     addSheet={this.processAddSheet}
        
    //     />
    // }
// }
// changePage(page){
//     this.setState({
//         'active': page
//     })
// }




// render(){
//     return (
//     <div className="allSheetContainer">
//       <ul className="nav nav-tabs">
//           <li className="nav-item">
//               <button className={"nav-link" + (this.state.active==='/get_all_sheet' ? 'active' : '')} aria-current="page" onClick={()=>{
//                             this.changePage("listing")
//                     }}>
//                 Sheets
//              </button>
//          </li>
//          <li className="nav-item">
//              <button className={"nav-link" + (this.state.active==='add-new' ? 'active' : '')} aria-current="page" onClick={()=>{
//                             this.changePage("addSheet")
//             }}>
//               Add Sheet
//              </button>
//          </li>
//       </ul>
//      {this.renderPage()}
//     </div>
// )
// }
   
//   async componentDidMount(){
//          let response = await axios.get(this.BASE_API_URL + "all_sheet");
//        this.setState({
//         'sheet':response.sheet
//     })
//     renderPage(); {
//         if(this.state.active === 'get_all_sheet'){
//             return <Sheet data={this.state.sheet} />
//         }else if(this.state.active === 'addSheet')
//         return<AddSheet />
//     }

// setActive(page);{
//     this.setState({
//         'active':page
//   })
// }


        // axios.get(`https://3000-anqiii123-project2expre-6ly8p2l74dn.ws-us54.gitpod.io/get_all_sheet`)
        //     .then(res => {
        //         const sheets = res.data;
        //         this.setState({ sheets });
        //     })
        // }


//     render();{
//         return (<div className="allSheetContainer">
//         <ul className="nav nav-tabs">
//              <li className="nav-item">
//                  <button className="nav-link"
//                          onClick={()=>{this.setActive('sheetListing')}}>
//                   Sheets
//                  </button>
//              </li>
//              <li>
//                  <button className="nav-link"
//                  onClick={()=>{this.setActive('addSheet')}}>
//                   Add Sheet
//                  </button>
//              </li>
//           </ul>
//          {this.renderPage()}
//       </div>
//     )}
// }
              /* <React.Fragment>
             <div className="allSheetContainer">
                  <ul className="nav nav-tabs">
                       <li className="nav-item">
                           <button className="nav-link">
                            Sheets
                           </button>
                       </li>
                       <li>
                           <button className="nav-link">
                            Add Sheet
                           </button>
                       </li>
                  </ul>

                </div> 
                <div className="row">
                    {
                        this.state.sheets
                            .map(sheet =>
                                <div className="col-6 col-lg-4 mt-2 mp-2" key={sheet._id}>

                                    <div className=' sheetBox mx-auto'>
                                        <div className='sheetPictureBox mx-auto '>
                                        <img src={sheet.cover.imageUrl} style={{maxWidth:'100%' ,maxHeight:'100%'}}/>
                                        </div>

                                        <div className='desc_container'>
                                            <h5>Name: {sheet.original.songName}</h5>
                                            <p>By: {sheet.original.composer}</p>
                                            <p>Pages: {sheet.cover.numberOfPages}</p>
                                            <p>Difficulty: {sheet.cover.difficulty}</p>

                                            <button className="nav-link">
                                                Details
                                            </button>

                                             <Link to={{pathname: `/sheetdetails/${sheet._id}`}}>
                                            <button type="button" className="btn btn-outline-warning" >Details</button>
                                            </Link> 
                        
                                        </div>                                     

                                    </div>

                                </div>

                            )
                    }
                                        <div className='pagination'>
                                                 <nav aria-label="Page navigation example">
                                                     <ul className="pagination">
                                                    <li className="page-item"><a className="page-link" href="#">《</a></li>
                                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                    <li className="page-item"><a className="page-link" href="#">》</a></li>
                                                       </ul>
                                                </nav>
                                        </div>
                </div>

                </React.Fragment>
    
*/
