import './homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';

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
                <div className="row justify-content-center">
                    <div className="col-sm-2 mx-auto">
                        <h2>Welcome to ShareSheet</h2>
                    </div>
                </div>
            </div>

            <div className="row mt-2">


                <div className="col-6 col-lg-4">

                    <div className=' sheetBox mx-auto'>
                        <div className='sheetPictureBox'></div>
                        <p>Piano Sheet Name1</p>
                        <p>Author Name 1</p>
                    </div>

                </div>

                <div className="col-6 col-lg-4">
                    <p>Piano Sheet Name2</p>
                </div>
                <div className="col-6 col-lg-4">
                    <p>Piano Sheet Name3</p>
                </div>
                <div className="col-6 col-lg-4">
                    <p>Piano Sheet Name4</p>
                </div>
            </div>
        </>



    )
}

export default homepage;