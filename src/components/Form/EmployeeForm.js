import React, { Component } from 'react'
import { getData } from '../../actions/index'
import { connect } from 'react-redux'
import './table.css'

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

    const infoList = this.props.employesinfo.map( detail => (
           
            
      <div key={detail.id}>
      <br />

      <table>
    
      <tr>
      <td>{detail.employee_name}</td>
      <td>{detail.employee_salary}</td>
      <td>{detail.employee_age}</td>
      <td>  <button> Delete</button></td>
      
      </tr>
      
      
       </table>
   
  </div>

  ));








 

    return (
      <div>
             <h1>Details of the employee </h1>
             <table>
             
             <tr>
             <th>Name</th>
             <th> Age</th>
             <th>Salary</th>
         
             
             </tr>
             </table>
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