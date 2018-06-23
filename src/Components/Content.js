import React from 'react';
import RightSection from './RightSection';
import LeftSection from './LeftSection';

class Content extends React.Component{

    render(){
        return(
            <div className="container">
          <div className="row">
            <LeftSection opp={this.props.opp}/>
            <RightSection opp={this.props.opp}/>
            
            
        
          </div>
        </div>
        )
    }


}

export default Content;