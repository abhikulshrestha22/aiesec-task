import React from 'react';

import SimpleMap from './Map.js';
import '../styles/LeftSection.css';

class LeftSection extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        function convertArrayIntoStrings(arr){
            var arr2 = arr.map((value)=>value.name);

            return arr2.toString();
            
        }

        return (
            <div className="col-8 leftSectionBox padding-10">
            <div className="headings-out">
            Overview
        </div>
        <div>
            <div className="headings">
            Organization
            </div>
            <div className="content">
                {this.props.opp.branch!=null?this.props.opp.branch.organisation.name:''}<br/>
                {this.props.opp.location}
            </div>
        </div>
        <div className="line">
            <div className="headings">
            Main Activities
            </div>
            <div className="content">
                <ul>
                    {this.props.opp.role_info!=null?this.props.opp.role_info.learning_points_list.map((value)=><li>{value}</li>):''}
                </ul>
                
            </div>
        </div>  
        <div className="padding-40">
            <div className=" headings-out line">
                Pre Requisites
            </div>
            <div className="margin-side-0 row padding-10">
                <div className="col-2">
                    <div className="headings">
                        Backgrounds
                    </div>

                </div>
                <div className="content-box col-10  line">
                    <div className="small-headings">
                    REQUIRED
                    </div>
                    <div className="content ">
                    {this.props.opp.backgrounds!=null?this.props.opp.backgrounds[0].name:''}
                    </div>
                </div>
            </div>
            <div className="margin-side-0 row padding-10">
                <div className="col-2">
                    <div className="headings">
                        Skills
                    </div>

                </div>
                <div className="content-box col-10  line">
                    <div className="small-headings">
                    preferred
                    </div>
                    <div className="content ">
                    {this.props.opp.skills!=null? convertArrayIntoStrings(this.props.opp.skills):''}
                    </div>
                </div>
                
            </div>
            <div className="margin-side-0 row padding-10">
                <div className="col-2">
                    <div className="headings">
                        Nationalities
                    </div>

                </div>
                <div className="content-box col-10  line">
                    <div className="small-headings">
                    preferred
                    </div>
                    <div className="content ">
                    {this.props.opp.nationalities!=null? convertArrayIntoStrings(this.props.opp.nationalities):''}
                    </div>
                </div>
                
            </div>
            <div className="margin-side-0 row padding-10">
                <div className="col-2">
                    <div className="headings">
                        Languages
                    </div>

                </div>
                <div className="content-box col-10  line">
                    <div className="small-headings">
                    preferred
                    </div>
                    <div className="content ">
                    {this.props.opp.languages!=null? convertArrayIntoStrings(this.props.opp.languages):''}
                    </div>
                </div>
                
            </div>
            <div className="margin-side-0 row padding-10">
                <div className="col-2">
                    <div className="headings">
                        Study Levels
                    </div>

                </div>
                <div className="content-box col-10  line">
                    <div className="small-headings">
                    
                    </div>
                    <div className="content ">
                    {this.props.opp.study_levels!=null? convertArrayIntoStrings(this.props.opp.study_levels):''}
                    </div>
                </div>
                
            </div>
        </div>
        <div className="padding-40">
            <div className=" headings-out line">
                Selection Process
            </div>
            <div className="margin-side-0 row padding-10">
                <div className="col-2">
                    testing

                </div>
                
            </div>
        </div>
        <div className="padding-40">
            <div className=" headings-out line">
                Visa and Logistics
            </div>
            <div className="margin-side-0 row padding-10">
                <div className="col-2">
                    <div className="headings">
                        Working Hours
                    </div>

                </div>
                <div className="content-box col-10  line">
                    
                    <div className="content ">
                    {this.props.opp.specifics_info!=null?this.props.opp.specifics_info.expected_work_schedule.from:''
                    } to 
                    {this.props.opp.specifics_info!=null?' ' + this.props.opp.specifics_info.expected_work_schedule.to:''}
                    </div>
                    <div className="italics-content">Not on weekends</div>
                </div>
            </div>
            <div className="margin-side-0 row padding-10">
                <div className="col-2">
                    <div className="headings">
                        Logistics
                    </div>

                </div>
                <div className= "content-box col-10  line">
                    
                    <div className="content ">
                    <i className="fas fa-check"></i>
                    <i className="fas fa-times"></i>
                    </div>
                    
                </div>

            </div>

            
            <div className="margin-side-0 row padding-10">
                <div className="col-2">
                    <div className="headings">
                        Visa
                    </div>
                    


                </div>
            
                <div className="content-box col-10  line">
                    <div className="small-headings">
                    Visa Type
                    </div>
                    <div className="content ">
                    {this.props.opp.legal_info!=null? this.props.opp.legal_info.visa_type:''}
                    </div>
                    <div className="small-headings">
                    Visa Duration
                    </div>
                    <div className="content ">
                    {this.props.opp.legal_info!=null? this.props.opp.legal_info.visa_duration:''}
                    </div>
                    <div className="small-headings">
                    Visa Link
                    </div>
                    <div className="content ">
                    {this.props.opp.legal_info!=null? this.props.opp.legal_info.visa_link:''}
                    </div>
                </div>
            </div>


            <div className="margin-side-0 row padding-10">
                <div className="col-2">
                    <div className="headings">
                        Health Insurance
                    </div>
                </div>
                <div className="content-box col-10  line">
                    
                    <div className="content ">
                    {this.props.opp.legal_info!=null? this.props.opp.legal_info.health_insurance_info:''}
                    </div>
                    
                </div>
            </div>

            <div className="margin-side-0 row padding-10">
                <div className="col-2">
                    <div className="headings">
                        Host AIESEC office
                    </div>
                </div>
                <div className="content-box col-10  line">
                    
                    <div className="content ">
                    {this.props.opp.host_lc!=null? this.props.opp.host_lc.full_name:''}
                    </div>
                    
                </div>
            </div>


            <div className="margin-side-0 row padding-10">
                <div className="col-2">
                    <div className="headings">
                       Location
                    </div>
                </div>
                <div className="content-box col-10  line">
                    
                    <SimpleMap/>
                    
                </div>
            </div>
            


            
        </div>
        
                
            
            </div>
            
        )
    }

}

export default LeftSection;