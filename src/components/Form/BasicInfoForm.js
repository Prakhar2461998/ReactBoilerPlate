import React, { Component } from 'react'
import { createData } from '../../actions/index'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

 class BasicInfoForm extends Component {


  constructor(props)
  {
   super(props);
   this.state ={
     id:' ',
     name:' ',
     date: ' '
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
           id:this.state.id,
           name:this.state.name,
           date:this.state.date
       };
      
       

      this.props.createData(body);
                  }

  render() {
    const{ id ,name , date }= this.state
    return (
      <div>
        <h1>Enter your details</h1>
        <form onSubmit={this.onSubmit}>
        
         <label>ID:</label><br />
         <input type="text"  name="id" value={this.state.id} onChange={this.onChange} required>
         </input>
         <br />
         <label>NAME:</label><br />
         <input type="text"  name="name" value={this.state.name} onChange={this.onChange}  required></input>

         <br />
            
         <label>DATE:</label><br />
         <input type="text"  name="date" value={this.state.date }  onChange={this.onChange}  required/>
         <br/>
         <br />
         <button>Add</button>
        </form>
        <br />
        <hr />
        <h2>Details to be added</h2>
        <label>ID:{id} </label> <br />
        
        <label>NAME:{name}</label>
        <br />
        <label>DATE:{date}</label> <br />
        
      </div>
    )
  }
}



BasicInfoForm.propTypes={
  createData: PropTypes.func.isRequired
};

export default connect(null, {createData})(BasicInfoForm);