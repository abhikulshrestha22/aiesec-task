import React,{Component} from 'react';
import '../styles/Navbar.css';

//import logo from '../images/logo.jpg'

class Navbar extends Component{

    constructor(props){
      super(props);
    }

    render(){

        
        
        return(
            <nav className="navbar-custom container-fluid navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand-custom navbar-brand" href="#">
                  <img className="logo" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                  
                  <ul className="navbar-nav ml-md-auto mt-2 mt-lg-0">
                    <li >
                      <a to="/home" className="nav-link" href="#">Skills
                      <span className="sr-only">(current)</span></a>
                    </li>
                    <li  >
                      <a to="/about" className="nav-link" href="#">My Work</a>
                    </li>
                    
                    <li >
                      <a to="/gallery" className="nav-link" href="#">About</a>
                    </li>
                    <li >
                    <a to="/help" className="nav-link" href="#">Contact</a>
                    </li>
                    <li>
                    <a to="/contact" className="nav-link" href="#">CONTACT</a>
                    </li>
                    
                  </ul>
                  
                </div>
              </nav>
        );
    }
};

export default Navbar;