import React, { Component } from 'react'
import { getData } from '../../actions/index'
import { connect } from 'react-redux'


 class EmployeeForm extends Component {
       

      
  constructor(props)
  {

   super(props)
   this.state={
       info:[],
        
   }
  }
       componentDidMount()
          {
            
          this.props.getData()
        }


  render() {

    const infoList=this.state.info.map(details =>(
      <div key ={details.id}>
      
      <h2>NAME : {details.employee_name}</h2>
             
             
      <p>Salary: {details.employee_salary}</p>
      
         <p>Age: {details.employee_age} </p>
  
         <button >DELETE</button>
      
      </div>
  
      
  ))
  

    return (
      <div>
            <h1>Details of the employee </h1>
        {infoList}
       </div>
    )
  }
}

const mapStateToProps = (state) => {
  
  const {employesinfo} = state.rootReducer
  
  return { employesinfo }
}
export default connect((mapStateToProps), { getData })(EmployeeForm)