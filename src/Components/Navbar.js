import React,{Component} from 'react';
import '../styles/Navbar.css';

//import logo from '../images/logo.jpg'

class Navbar extends Component{

    constructor(props){
      super(props);
    }

    render(){

        
        
        return(
            <nav className="navbar-custom container-fluid navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
                <a className="navbar-brand-custom navbar-brand" href="#">
                  <img className="logo" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                  
                  <ul className="navbar-nav ml-md-auto mt-2 mt-lg-0">
                    <li >
                      <a to="/home" className="nav-link" href="#">For Organizations
                      <span className="sr-only">(current)</span></a>
                    </li>
                    <li  >
                      <a to="/about" className="nav-link" href="#">Help</a>
                    </li>
                    
                    <li >
                      <button  to="/gallery" className="explore-btn btn btn-primary btn-md nav-link" href="#">Explore</button>
                    </li>
                    <li >
                    <a to="/help" className="nav-link" href="#">Sign Up</a>
                    </li>
                    
                    
                  </ul>
                  
                </div>
              </nav>
        );
    }
};

export default Navbar;