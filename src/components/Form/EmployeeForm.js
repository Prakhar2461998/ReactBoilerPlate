import React, { Component } from 'react'
import { getData } from '../../actions/index'
import { connect } from 'react-redux'
import { deleteData } from '../../actions/index'
import { updateData } from '../../actions/index'
import './table.css'

 class EmployeeForm extends Component {
       

      
  constructor(props)
  {

   super(props)
   this.state={
       info:[],
        
   }
   this.onClickDelete=this.onClickDelete.bind(this);
   this.onClickUpdate= this.onClickUpdate.bind(this)
  }
       componentDidMount()
          {
            
          this.props.getData()
        }


      onClickDelete(e)
      {
       
    
        this.props.getData()
        this.props.deleteData()
       
      }
       
  onClickUpdate()
  {
    this.props.updateData();
    this.props.getData();
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
      <td>  <button onClick={this.onClickDelete}> Delete</button></td>
      <td><button onClick={this.onClickUpdate} >Update</button></td>
      
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
  
  const {employesinfo , deleteinfo , updateinfo } = state.rootReducer
  
  return { employesinfo , deleteinfo , updateinfo }
}
export default connect((mapStateToProps), { getData, deleteData , updateData} )(EmployeeForm)