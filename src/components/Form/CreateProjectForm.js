
import React, { Component } from 'react';
import { createData, updateProjectFormData, updateData } from '../../actions/ProjectInfoAction';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter, NavLink } from 'react-router-dom';
import { getProjectDetails } from '../../actions/ProjectInfoAction';
//import { updateData } from '../../actions/ProjectInfoAction';

class CreateProjectForm extends Component {

  componentDidMount() {
    console.log(this.props.history, 'this.props.history')
    if (this.props.history.location.pathname.match('/edit')) {
      console.log(this.props.match.params.projectid, 'this.props.match.params.projectid')
      this.props.dispatch(getProjectDetails(this.props.match.params.projectid));
    }
  }

  handleOnChange(e) {
    console.log('on chnage', e.target.name, e.target.value)
    const newState = Object.assign(this.props.projectFormData, {
      [e.target.name]: e.target.value
    });
    this.props.dispatch(updateProjectFormData(newState))
    this.forceUpdate()
  }

  onSubmit(e) {
    e.preventDefault();
    const formBody = this.props.projectFormData;
    if( (this.props.history.location.pathname.match('/edit')))
    {
      this.props.dispatch(updateData(this.props.match.params.projectid,formBody))
    }
    else{
       this.props.dispatch(createData(formBody));
    }
  }

  render() {
    // console.log(this.props.projectFormData, 'projectFormDataprojectFormDataprojectFormData')
    // console.log(this.props.projectFormData.tracking_url, 'trackingurl')
    console.log(this.props.projdetails,"component check proj details")
    // console.log(this.props.projdetails.name,"component check proj details")
    // console.log(this.props.projdetails.tracking_url,"component check proj details")
    
    const { projectFormData } = this.props
    return (
      <div>
        <h1>ADD/CREATE YOUR PROJECT</h1>
        <form onSubmit={this.onSubmit.bind(this)}>

          <label>PROJECT NAME:</label>
          <br />
          <input type="text" name="name" value={this.props.projectFormData.name} onChange={this.handleOnChange.bind(this)} minLength="3" required>
        
          </input>

          <br />
          <br />

          <label>TARCKING URL:</label>
          <br />
          <input type="text" name="tracking_url" value={this.props.projectFormData.tracking_url} onChange={this.handleOnChange.bind(this)} required></input>
          <br />
          <br />
          <label>TRACKING TYPE</label>
          <br/>
          <input type="text" name="tracking_type" value={this.props.projectFormData.tracking_type} onChange={this.handleOnChange.bind(this)} />
          
          
                
          

          <br />
          <br />
          <label  >NAMESPACE:</label>
          <br />
          <input type="text" name="namespace" value={this.props.projectFormData.namespace} onChange={this.handleOnChange.bind(this)} required />
          <br />
          <br />

          <button style={{ borderRadius: "10px", backgroundColor: "#4CAF50", padding: "6px", paddingRight: "18px", paddingLeft: "18px" }}>Add</button>
        </form>
        <br />


      </div>
    )
  }
}


const mapStateToProps = (state) => {

  const { addproject, projectFormData, projdetails, projName } = state.rootReducer
  console.log(projectFormData, 'projectFormData')
  

  return { addproject, projectFormData, projdetails, projName }
}
export default withRouter(connect(mapStateToProps)(CreateProjectForm))
