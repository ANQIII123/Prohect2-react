// import'./App.css';
import logo from './logo.svg';
import Homepage from './pages/homepage'
import AllSheet from './component/AllSheet';
import AddSheet from "./pages/AddSheet.js";
import SheetDetails from './pages/SheetDetails';
import {Container, Navbar, Button} from 'react-bootstrap'
import React from 'react';
import { DeleteSheetPage } from './pages/DeleteSheetPage';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 'HomePage',
      myprop:[],
      sheetid:''
    }
  }

  renderPage(pageName) {
    console.log('clicked')
    let pageList = { 
      'HomePage': <Homepage setActive={this.setActive}/>,
      'DetailPage':<SheetDetails sheetid={this.state.sheetid}/>, 
      'AddSheet' :<AddSheet/>,
      'DeleteSheetPage':<DeleteSheetPage/>
    }
    return (pageList[pageName])
  }

  setActive=(pageName, _sheetid=null)=>{
    this.setState({active:pageName})
    if(_sheetid){
      this.setState({sheetid:_sheetid})
    }
  }
  


  render() {
    console.log('rendered')
    return (

      <React.Fragment>
        <Navbar bg="white" variant="transparent">
        <Container className="topNav">
          <Navbar.Brand>Share Sheet</Navbar.Brand>
          <div className="me-auto">
             <Button variant="dark" onClick={()=>{this.setActive('HomePage')}} >Home</Button>
             <Button variant="dark" onClick={()=>{this.setActive('AddSheet')}} >Add Piano Sheet</Button>
             <Button variant="dark" onClick={()=>{this.setActive('DeleteSheetPage')}} >Delete Piano Sheet</Button>
          </div >
        </Container>
      </Navbar>
        {this.renderPage(this.state.active)}      
      </React.Fragment >
      

        );
  }
}
        export default App;

        {/* 
       <React.Fragment>
       <Homepage /> 
        <AllSheet />
      <SheetDetails />
       </React.Fragment> */}
