// import'./App.css';
import logo from './logo.svg';
import Homepage from './homepage'
import AllSheet from './AllSheet';
import AddSheet from "./AddSheet";
import SheetDetails from './SheetDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

class App extends React.Component {
  render() {
    return (

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>,

      // <BrowserRouter>
      //   <Routes>
      //     <Route path="/" element={<Homepage />}/>
      //     <Route path="/addSheet" element={<AddSheet />}/>
      //     <Route path="/sheetDetails/:id" element={<SheetDetails />}/>

      //   </Routes>
      // </BrowserRouter>
      <React.Fragment>
        <Homepage />
        <AllSheet />
        <SheetDetails />
      </React.Fragment>

    );
  }
}
export default App;
