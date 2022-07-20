import React, { Fragment } from "react";
import axios from "axios";
import SheetDetails from "./SheetDetails";
import Sheet from "./models/Sheet";
import AddSheet from "./AddSheet";



export default class AllSheet extends React.Component {

    state = {
        active:'get_all_sheet',
        sheet:[]
    }
  BASE_API_URL="https://3000-anqiii123-project2expre-6ly8p2l74dn.ws-us54.gitpod.io/"
   
  async componentDidMount(){
         let response = await axios.get(this.BASE_API_URL + "all_sheet");
       this.setState({
        'sheet':response.sheet
    })
    renderPage(); {
        if(this.state.active === 'get_all_sheet'){
            return <Sheet data={this.state.sheet} />
        }else if(this.state.active === 'addSheet')
        return<AddSheet />
    }

setActive(page);{
    this.setState({
        'active':page
  })
}


        // axios.get(`https://3000-anqiii123-project2expre-6ly8p2l74dn.ws-us54.gitpod.io/get_all_sheet`)
        //     .then(res => {
        //         const sheets = res.data;
        //         this.setState({ sheets });
        //     })
        // }


    render();{
        return (<div className="allSheetContainer">
        <ul className="nav nav-tabs">
             <li className="nav-item">
                 <button className="nav-link"
                         onClick={()=>{this.setActive('sheetListing')}}>
                  Sheets
                 </button>
             </li>
             <li>
                 <button className="nav-link"
                 onClick={()=>{this.setActive('addSheet')}}>
                  Add Sheet
                 </button>
             </li>
          </ul>
         {this.renderPage()}
      </div>
    )}
}
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
    

// export default AllSheet*/}
