import React from 'react';
import RightSection from './RightSection';
import LeftSection from './LeftSection';

import '../styles/Content.css';

class Content extends React.Component{

    render(){
        return(
            <div className="container">
          <div className="row">
            <LeftSection opp={this.props.opp}/>
            <RightSection opp={this.props.opp}/>
            <div className="col-12">
              <h3>Leadership Development </h3>
              Our mission is to enable youth to develop four leadership qualities through our experiences and impact the world for the better.
            </div>
            <div className="dummy">
            lalala</div>
            
        
          </div>
        </div>
        )
    }


}

export default Content;