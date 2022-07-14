import React, { Fragment } from "react";
import axios from "axios";


class AllSheet extends React.Component {

    state = {
        sheets: []
    }

    componentDidMount() {
        axios.get(`https://3000-anqiii123-project2expre-3xgq0qnngcp.ws-us54.gitpod.io/add_sheet`)
            .then(res => {
                const sheets = res.data;
                this.setState({ sheets });
            })
    }


    render() {

        return (
            <React.Fragment>



                <div className="row mt-2">
                    {
                        this.state.sheets
                            .map(sheet =>
                                <div className="col-6 col-lg-4" key={sheet._id}>

                                    <div className=' sheetBox mx-auto'>
                                        <div className='sheetPictureBox mx-auto '>
                                        <img src={sheet.cover.imageUrl} style={{maxWidth:'100%' ,maxHeight:'100%'}}/>
                                        </div>

                                        <div className='desc_container'>
                                            <h5>Song Name: {sheet.original.songName}</h5>
                                            <p>Composer: {sheet.original.composer}</p>
                                            <p>Pages: {sheet.cover.numberOfPages}</p>
                                            <p>Price: {sheet.cover.cost}</p>
                                        </div>

                                    </div>

                                </div>

                            )
                    }

                </div>

            </React.Fragment>
        )
    }

}

// export default AllSheet



// import React from "react";

// export default function AddNew(props) {
//   return (
//     <React.Fragment>
//       <h1>Add New Piano Sheet</h1>
//       <div>
//         <div className="label">Title</div>
//         <input
//           type="text"
//           className="form-control"
//           name="newSheet"
//           value={props.newSheet}
//           onChange={props.onUpdateSheetField}
//         />
//       </div>
//       <div>
//         <div className="label">Ingredients</div>
//         <input
//           type="text"
//           className="form-control"
//           name="newIngredients"
//           value={props.newIngredients}
//           onChange={props.onUpdateFormField}
//         />
//       </div>
//       <button className="btn btn-primary mt-3" onClick={props.onAddNew}>
//         Add New
//       </button>
//     </React.Fragment>
//   );
// }
