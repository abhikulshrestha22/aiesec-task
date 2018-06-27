import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import '../styles/EditPage.css';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      overflow              : 'scroll',
      height                : '400px',
      width               :'500px'
    }
  };

  Modal.setAppElement('#root');

class EditPage extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            modalIsOpen: false,
            
          };

      
          this.openModal = this.openModal.bind(this);
          this.afterOpenModal = this.afterOpenModal.bind(this);
          this.closeModal = this.closeModal.bind(this);
        }

    openModal() {
        this.setState({modalIsOpen: true});
      }

      afterOpenModal() {
        // references are now sync'd and can be accessed.
        //this.subtitle.style.color = '#f00';
      }
    
      closeModal() {
        this.setState({modalIsOpen: false});
      }  

      handleSubmit=(e)=>{
          alert("bhai aa gya");
          e.preventDefault();
          this.props.saveOpp();
      }


    render(){
        return(
            <div>
                <div className="edit-button-box">
                    <button onClick={this.openModal} className="edit-button btn btn-primary">
                        Edit
                    </button>
                    <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
            <div className="headings-edit">
                Edit the Details
            </div>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title:</label><br/>
                    <input className="form-control" id="title" 
                        name="title" 
                        value={this.props.oppLocal.title} 
                        onChange={(e)=>this.props.changeOppLocal(e)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="applications_close_date">Applications Close Date:</label><br/>
                    <input type="date" className="form-control"id="applications_close_date" 
                        name="applications_close_date" 
                        value={this.props.oppLocal.applications_close_date} 
                        onChange={(e)=>this.props.changeOppLocal(e)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="earliest_start_date">Earliest Start Date:</label><br/>
                    <input type="date" className="form-control" id="earliest_start_date" 
                        name="earliest_start_date" 
                        value={this.props.oppLocal.earliest_start_date} 
                        onChange={(e)=>this.props.changeOppLocal(e)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="latest_end_date">Latest End Date:</label><br/>
                    <input type="date" className="form-control" id="latest_end_date" 
                        name="latest_end_date" 
                        value={this.props.oppLocal.latest_end_date} 
                        onChange={(e)=>this.props.changeOppLocal(e)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label><br/>
                    <textarea className="form-control" id="description"
                        name="description"
                        value={this.props.oppLocal.description} 
                        onChange={(e)=>this.props.changeOppLocal(e)}/>
                    
                </div>
                <div className="form-group">
                    <label htmlFor="salary">Salary:</label><br/>
                    <input type="text" className="form-control" id="salary"
                        name="salary"
                        value={this.props.oppLocal.specifics_info!=null?this.props.oppLocal.specifics_info.salary:''} 
                        onChange={(e)=>this.props.changeOppLocal(e)}/>
                    
                </div>
                <input  type="submit" value="Submit" className="btn btn-primary  editpage-btn"  />
                <button className="btn btn-danger editpage-btn" onClick={this.closeModal}>close</button>
            </form>
          
          
        </Modal>
                </div>

            </div>
        )
    }
}

export default EditPage;