import React, { Component } from 'react'
import { createData } from '../../actions/index'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

 class BasicInfoForm extends Component {


  constructor(props)
  {
   super(props);
   this.state ={
     Name:' ',
     Salary:' ',
     Age: ' '
   };
   


   this.onChange = this.onChange.bind(this);
   this.onSubmit =this.onSubmit.bind(this);

  }



  onChange(e)
  {
      this.setState({[e.target.name]: e.target.value});
     
  }

  onSubmit(e)
  {
       e.preventDefault();
       const details = {
           Name:this.state.Name,
           Salary:this.state.Salary,
           Age:this.state.Age
       };
      
      this.props.createData(details);
                  }

  render() {
    const{ Name,Salary ,Age }= this.state
    return (
      <div>
        <h1>Enter your details</h1>
        <form onSubmit={this.onSubmit}>
        
         <label>Name:</label>
         <input type="text"  name="Name" value={this.state.Name} onChange={this.onChange}>
         </input>
         <br />
         <label>Salary:</label>
         <input type="text"  name="Salary" value={this.state.Salary} onChange={this.onChange} ></input>

         <br />
            
         <label>Age:</label>
         <input type="text"  name="Age" value={this.state.Age}  onChange={this.onChange} />
         <br/>
           
        </form>
        <br />
        <hr />
        <h2>Details to be added</h2>
        <label>Name:{Name} </label> <br />
        
        <label>Salary:{Salary}</label>
        <br />
        <label> Age:{Age}</label> <br />
        <button>Add</button>
      </div>
    )
  }
}



BasicInfoForm.propTypes={
  createData: PropTypes.func.isRequired
};

export default connect(null, {createData})(BasicInfoForm);