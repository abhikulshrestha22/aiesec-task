import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import ReactDOM from 'react-dom';
import Content from './Components/Content';

const access_token = 'dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c';
const opp_no = 6124;


class App extends Component {

  constructor(props){
    super(props);

    
    

    // Initial state
    this.state = {
                  opp:{},
                  modalIsOpen: false,
                  oppLocal:{}
                };
          

   this.getDataFromApi();
    
    
  }

  getDataFromApi = ()=>{
    var obj = {
      method:'GET',
      headers:{
        'Accept': 'application/json',
         }
        }
                // Fetching the oppourtunity 6124 from api
              const url = 'http://gisapi-web-staging-1636833739.eu-west-1.elb.amazonaws.com/v2/opportunities/6124?access_token=dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c'
              fetch(url,obj)
              .then(
                (res)=>res.json())
              .catch((err)=>console.log(err))
              .then((resJson)=>{
                console.log(resJson);
                this.setState({
                  opp:resJson,
                  oppLocal:Object.assign({},resJson)
                })
                ;
          
              }).catch((err)=>console.log(err));
          
              }
  
    

    // handleChange = e => {
    //   this.setState({ opp: { description: e.target.value } });
    // };
    
    changeOppLocal = (e)=>{
      console.log("printing the obj now");
      console.log(e.target.value);
      const value = e.target.value;
      const key = e.target.name;
      const items = this.state.oppLocal;
      if(key === 'salary'){
        if(items.specifics_info!=null){
          
          items.specifics_info.salary = value;
        }
         
          
        this.setState({
          oppLocal:items
        })
      }
      else{
        items[key] = value;
        this.setState(
         {
           oppLocal:items
         }
        )

      }
      
    }


    saveOpp=()=>{
     
      console.log("in func saveOpp");
      console.log("local app close date");
      console.log(this.state.oppLocal.applications_close_date);
      const url = 'http://gisapi-web-staging-1636833739.eu-west-1.elb.amazonaws.com/v2/opportunities/6124?access_token=dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c'
      const param_update_title = "opportunity[title]=" + this.state.oppLocal.title;
      const param_update_applications_close_date="opportunity[applications_close_date]=" + this.state.oppLocal.applications_close_date;
      const param_update_earliest_start_date="opportunity[earliest_start_date]="+ this.state.oppLocal.earliest_start_date;
      const param_update_latest_end_date="opportunity[latest_end_date]=" + this.state.oppLocal.latest_end_date;
      const param_update_description="opportunity[description]="+this.state.oppLocal.description
      const param_update_salary="opportunity[specifics_info][salary]="+ this.state.oppLocal.specifics_info.salary;

      fetch(url + '&' + param_update_title + '&' + param_update_applications_close_date 
              +'&'+ param_update_earliest_start_date + '&'+param_update_latest_end_date
              +'&'+ param_update_description + '&'+param_update_salary ,
      {
        method:'PATCH',
        headers:{
          'Accept': 'application/json',
           }
          })
        .then(
          (res)=>res.json())
        .catch((err)=>console.log(err))
        .then((resJson)=>{
          console.log("patch done");
          console.log(resJson);
        })
        .then(()=>(this.getDataFromApi()))
        ;
        


    }
  


  render() {

    
    return (
      <div >
        <Navbar/>
        <Banner opp={this.state.opp}/>
        <Content saveOpp={this.saveOpp} changeOppLocal={this.changeOppLocal} opp={this.state.opp} oppLocal={this.state.oppLocal}/>
        
      </div>
      
    );
  }
}

export default App;
