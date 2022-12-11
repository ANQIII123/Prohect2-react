import Homepage from './pages/homepage'
import AddSheet from "./pages/AddSheet.js";
import SheetDetails from './pages/SheetDetails';
import { Container, Navbar, Button, ButtonGroup, Col } from 'react-bootstrap'
import React from 'react';
import { EditSheetPage } from './pages/EditSheetPage';
import LoginPage from './pages/LoginPage';
import UpdateSheet from './pages/UpdateSheetPage';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 'HomePage',
      user: {},
      sheetid: ''
    }
  }

  renderPage(pageName) {
    console.log('clicked')
    let pageList = {
      'HomePage': <Homepage setActive={this.setActive} />,
      'DetailPage': <SheetDetails sheetid={this.state.sheetid} setActive={this.setActive} />,
      'AddSheet': <AddSheet />,
      'EditSheetPage': <EditSheetPage setActive={this.setActive} />,
      'LoginPage': <LoginPage setUser={this.setUser} />,
      'UpdateSheet': <UpdateSheet sheetid={this.state.sheetid} />
    }
    return (pageList[pageName])
  }

  setActive = (pageName, _sheetid = null) => {
    this.setState({ active: pageName })
    if (_sheetid) {
      this.setState({ sheetid: _sheetid })
    }
  }

  setUser = (_user) => {
    this.setState({ user: _user })
  }



  render() {
    console.log('rendered')
    return (

      <React.Fragment>
        <Navbar bg="white" variant="transparent"style={{"padding": "0.5%"}} >
          <Container className="topNav">
            {/* <div className='logo'>
              <img className="logoPicture" src="https://i.im.ge/2022/07/26/FhdeoD.png"></img>
              <h6 className='logoWord'>Anime Share.Sheet</h6>
            </div> */}
            <div className='topButton'>
              
              <div className='pageButton'>
              {/* <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShareSheet</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"  onClick={() => { this.setActive('HomePage') }}>Homepage</Nav.Link>
            <Nav.Link href="#features" onClick={() => { this.setActive('AddSheet') }} >Upload</Nav.Link>
            <Nav.Link href="#pricing" onClick={() => { this.setActive('EditSheetPage')}}>Search</Nav.Link>
          </Nav>
          </Container>
      </Navbar> */}

                {/* <ButtonGroup aria-label="Main page buttons">
                  <Button variant="dark" onClick={() => { this.setActive('HomePage') }} >Home</Button>
                  <Button variant="dark" onClick={() => { this.setActive('AddSheet') }} >Upload</Button>
                  <Button variant="dark" onClick={() => { this.setActive('EditSheetPage') }} >Search</Button>
                </ButtonGroup> */}
       </div>
                {/* <div className='loginButton'>
                 <Button variant="dark" onClick={() => { this.setActive('LoginPage') }} >{this.state.user.username ? this.state.user.username : 'Login'}</Button> 
                  <img style={{"height": "3vh","width":"auto"}} onClick={() => { this.setActive('LoginPage') }} src='http://cdn.onlinewebfonts.com/svg/img_411076.png'></img>
                </div> */}
            </div>
          </Container>
        </Navbar>

        <Navbar bg="light" variant="light">
        <Container>
        <h6 className='logoWord' style={{"fontSize":"45px","color":"black"}}>Anime Share.Sheet</h6>
          <Navbar.Brand href="#home">
            <img
              src="https://i.im.ge/2022/07/26/FhdeoD.png"
              width="50"
              height="auto"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"  onClick={() => { this.setActive('HomePage') }}>Homepage</Nav.Link>
            <Nav.Link href="#features" onClick={() => { this.setActive('AddSheet') }} >Upload</Nav.Link>
            <Nav.Link href="#pricing" onClick={() => { this.setActive('EditSheetPage')}}>Search</Nav.Link>
            <div className='loginButton'>
                  {/* <Button variant="dark" onClick={() => { this.setActive('LoginPage') }} >{this.state.user.username ? this.state.user.username : 'Login'}</Button> */}
                  <img style={{"height": "3vh","width":"auto","margin-left":"60px"}} onClick={() => { this.setActive('LoginPage') }} src='http://cdn.onlinewebfonts.com/svg/img_411076.png'></img>
                </div>
          </Nav>
          </Container>
      </Navbar>
        {this.renderPage(this.state.active)}
      </React.Fragment >


    );
  }
}
export default App;
