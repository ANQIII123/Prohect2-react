import './homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import AllSheet from './AllSheet.js'

function homepage() {
    return (
        /* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        </div> */
        <>
        
            <div className="background">
                <div className="row">
                    <div className="col-lg-4 offset-sm-1 ">
                        <h4 className='bgText'>Welcome to ShareSheet</h4>
                    </div>
                </div>
            </div>

            <AllSheet/>
        </>



    )
}

export default homepage;