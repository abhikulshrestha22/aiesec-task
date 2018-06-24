import React from 'react';

import '../styles/RightSection.css';

class RightSection extends React.Component{

    render(){
        return (
            
            <div className="rightSectionBox col-4">
            <div className="sticky">
            <h2 className="padding-10">Global Talent</h2>
                <div className="info-container">
                    <h4 className="right-section-heading">Background</h4>
                    <h5 className="underlined-text">{this.props.opp.backgrounds!=null?this.props.opp.backgrounds[0].name:''}</h5>
                </div>
                <div className="info-container">
                    <div className="row">
                        <div className="col-4">
                            <h4 className="right-section-heading">Earliest Start Date</h4>
                            <h5 className="underlined-text">{this.props.opp.earliest_start_date}</h5>
                   
                        </div>
                        <div className="col-4">
                            <h4 className="right-section-heading">Latest End Date</h4>
                            <h5 className="underlined-text">{this.props.opp.latest_end_date}</h5>
                   
                        </div>
                        <div className="col-4">
                        <h4 className="right-section-heading">Duration</h4>
                        <h5 className="underlined-text">{this.props.opp.duration + ' weeks'}</h5>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8">
                            <h4 className="right-section-heading">Salary</h4>
                            <h5 className="underlined-text">{this.props.opp.specifics_info!=null?this.props.opp.specifics_info.salary:''}</h5>
                   
                        </div>
                        <div className="col-4">
                            <h4 className="right-section-heading">Positions</h4>
                            <h5 className="underlined-text">{this.props.opp.available_openings}</h5>
                   
                        </div>
                        
                    </div>

                    <span>
                         </span>
                    <span>
                         </span>
                    </div>
                <div className="padding-10">
                    <button className="btn-lg btn-primary">Login to Apply</button>
                </div>
                
               </div>
               </div>
        )
    }

}

export default RightSection;