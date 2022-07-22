// import'./App.css';
import logo from './logo.svg';
import Homepage from './pages/homepage'
import AllSheet from './component/AllSheet';
import AddSheet from "./pages/AddSheet.js";
import SheetDetails from './pages/SheetDetails';
import {Container, Navbar, Button} from 'react-bootstrap'
import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 'HomePage',
      myprop:[]
    }
  }

  choosePageToRender(pageName) {
    console.log('clicked')
    let pageList = { 'HomePage': <Homepage/>,'DetailPage':<SheetDetails/>, 'AddSheet' :<AddSheet/>}
    return (pageList[pageName])
  }


  handleNavClick(pageName){
    this.setState({active:pageName})
  }


  render() {
    console.log('rendered')
    return (

      <React.Fragment>
        <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand>PianoSheet</Navbar.Brand>
          <div className="me-auto">
             <Button onClick={()=>{this.handleNavClick('HomePage')}} >Home</Button>
            <Button onClick={()=>{this.handleNavClick('DetailPage')}} >Detail Page</Button>
            <Button onClick={()=>{this.handleNavClick('AddSheet')}} >Add Sheet</Button>
          </div >
        </Container>
      </Navbar>
        {this.choosePageToRender(this.state.active)}      
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
