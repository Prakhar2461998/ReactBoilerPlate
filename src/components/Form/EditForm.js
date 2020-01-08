import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import {  getProjectDetails } from '../../actions/ProjectInfoAction'
import { getData } from '../../actions/ProjectInfoAction'
import { updateData } from '../../actions/ProjectInfoAction'
import { submitdata } from '../../actions/ProjectInfoAction'
 class EditForm extends Component {
    constructor(props)
  {
   super(props);
   this.state ={
     name:' ',
     toolurl:' ',
     namespace:' ',
     repo:' '
   };
   this.onChange = this.onChange.bind(this);
   this.onSubmit =this.onSubmit.bind(this);
  }

componentDidMount()
{
  this.props.dispatch(getProjectDetails(this.props.match.params.projectid));
}

  onChange(e)
  {
      this.setState({[e.target.name]: e.target.value});
   //   this.setState({[e.target.namespace]: e.target.value})
 //  this.props.dispatch(submitdata())
 }

  onSubmit(e)
  {
       e.preventDefault();
       const body = 
       {
          name:this.props.info,
          toolurl:this.state.toolurl,
          namespace:this.props.info,
          repo:this.state.repo
          
       };
    //  this.props.updateData(body)
  //   this.props.updateData(body)

    //    this.props.createData(body);
   }



    render() {
    
      console.log(this.props.projdetails)
          const {projdetails} =this.props;
        return (
            <div>
                <h1>EDIT FROM DETAILS</h1>
                 
                
                <form onSubmit={this.onSubmit}>
           
                <label>PROJECT NAME</label><br />
               
                <input type="text"  name="name" value= {projdetails.name} onChange={this.onChange} minLength="3" >

                </input>
                <br />
                <br />
                <label>TRACKING TYPE</label>
                <br />
                <br />
                <input type="radio" value = {projdetails.tracking_type}  />
                <label>Jira</label>
                <input type="radio" style={{marginLeft:"10%"}} value = {this.props.projdetails.tracking_type} />
                <label>Redmine</label>
                <br />
                <br />
              
                <label>TARCKING URL:</label>
                <input type="text"  name="toolurl" value={this.props.projdetails.tracking_url} onChange={this.onChange}  ></input>
       
                
                   
                <label  style={{marginLeft:"10%"}}>NAMESPACE:</label>
                <input type="text"  name="namespace" value={this.props.projdetails.namespace }  onChange={this.onChange}  />
                <br/>
                <br />
                <label style={{marginLeft:"1%"}}>REPOSITORY:</label> 
                <input type="text"  name="repo" value={this.props.projdetails.repositories} onChange={this.onChange}  ></input>
                
                <button  style={{marginLeft:"10%" ,borderRadius:"10px",
                 backgroundColor:"#4CAF50",padding:"6px",
                 paddingRight:"18px",
                 paddingLeft:"18px"}}>Update</button>
               </form>
               <br />

            </div>
        )
        
    }
    
    
}




EditForm.propTypes={
    createData: PropTypes.func.isRequired
  };
  
  const mapStateToProps = (state) => {
    
    const { addproject,projdetails , info } = state.rootReducer
     return { addproject ,projdetails ,info}
    
  }
  export default connect(mapStateToProps)(EditForm)
