import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import ReactDOM from 'react-dom';
import Content from './Components/Content';




class App extends Component {

  constructor(props){
    super(props);

    var obj = {
      method:'GET',
      headers:{
        'Accept': 'application/json',
         }
        }
    

    // Initial state
    this.state = {
                  opp:{},
                  modalIsOpen: false
                };
          

    
    // Fetching the oppourtunity 6124 from api
    fetch('http://gisapi-web-staging-1636833739.eu-west-1.elb.amazonaws.com/v2/opportunities/6124?access_token=dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c',obj)
    .then(
      (res)=>res.json())
    .then((resJson)=>{
      console.log(resJson);
      this.setState({
        opp:resJson
      });
    })

              }

    
  
    

    // handleChange = e => {
    //   this.setState({ opp: { description: e.target.value } });
    // };
    
  


  render() {

    
    return (
      <div >
        <Navbar/>
        <Banner opp={this.state.opp}/>
        <Content opp={this.state.opp}/>
        
      </div>
      
    );
  }
}

export default App;
