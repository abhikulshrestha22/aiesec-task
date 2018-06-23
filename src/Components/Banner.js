import React,{Component} from 'react';

import '../styles/Banner.css';

class Banner extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="banner container-fluid">
                <div className="col-md-10 offset-md-1 banner-box" >
                    <h2 className="titleName" >{this.props.opp.title}</h2><br/>
                    <h3 >{this.props.opp.location}</h3><br/>
                    <button className="primary">Login to Apply</button>

                </div>
    </div>
        );
    }
};

export default Banner;