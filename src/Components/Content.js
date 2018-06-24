import React from 'react';
import RightSection from './RightSection';
import LeftSection from './LeftSection';

import '../styles/Content.css';

class Content extends React.Component{

    render(){
        return(
            
            <div className="container">
            <div class="edit-button-box">
              <button className="edit-button btn btn-primary">
                Edit
              </button>
            </div>
          <div className="row">
            <LeftSection opp={this.props.opp}/>
            <RightSection opp={this.props.opp}/>
          </div>
          <div className="row">  
            <div className="col-12">
              <div className="headings-out">Leadership Development </div>
              <div className="content">Our mission is to enable youth to develop four leadership qualities through our experiences and impact the world for the better.
              </div>
            </div>
          </div>  
          <div className="video-box row">
              <div className="col-6 embed-responsive embed-responsive-16by9">
                <iframe src="//player.vimeo.com/video/22428395"/>             
              </div>
              <div className="col-6">
                <div className="video-box-text content italics-content">
              While interning/volunteering abroad is a challenging experience in itself, we aim to develop a set of leadership qualities within you through our support and guidance.
                </div>
              </div>
          </div>
        </div>
        )
    }


}

export default Content;