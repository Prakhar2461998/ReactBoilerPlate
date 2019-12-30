import React, { Component } from 'react'
import { createData } from '../../actions/index'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

 class BasicInfoForm extends Component {


  constructor(props)
  {
   super(props);
   this.state ={
     name:' ',
     salary:' ',
     age: ' '
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
       const body = {
           name:this.state.name,
           salary:this.state.salary,
           age:this.state.age
       };
      
       

      this.props.createData(body);
                  }

  render() {
    const{ name,salary ,age }= this.state
    return (
      <div>
        <h1>Enter your details</h1>
        <form onSubmit={this.onSubmit}>
        
         <label>Name:</label>
         <input type="text"  name="name" value={this.state.name} onChange={this.onChange}>
         </input>
         <br />
         <label>Salary:</label>
         <input type="text"  name="salary" value={this.state.salary} onChange={this.onChange} ></input>

         <br />
            
         <label>Age:</label>
         <input type="text"  name="age" value={this.state.age}  onChange={this.onChange} />
         <br/>
         <button>Add</button>
        </form>
        <br />
        <hr />
        <h2>Details to be added</h2>
        <label>Name:{name} </label> <br />
        
        <label>Salary:{salary}</label>
        <br />
        <label> Age:{age}</label> <br />
        
      </div>
    )
  }
}



BasicInfoForm.propTypes={
  createData: PropTypes.func.isRequired
};

export default connect(null, {createData})(BasicInfoForm);