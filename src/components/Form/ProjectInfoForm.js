import React, { Component } from 'react'
import { getData } from '../../actions/ProjectInfoAction'
import { connect } from 'react-redux'
import { deleteData } from '../../actions/ProjectInfoAction'
import { updateData } from '../../actions/ProjectInfoAction'
import { createData } from '../../actions/ProjectInfoAction'

//import { updateData } from '../../actions/index'
import './table.css'


 class ProjectInfoForm extends Component {
       

      
  constructor(props)
  {

   super(props)
   this.state={
       List:[],
        
   }
  // this.onClickDelete=this.onClickDelete.bind(this);
   //this.onClickUpdate= this.onClickUpdate.bind(this)
  }
       componentDidMount()
          {
            
          this.props.dispatch(getData())
          
        }


      onClickDelete(projectid)
      {
        
       this.props.dispatch(deleteData(projectid))
       this.props.dispatch(getData())
       
         }
       
  onClickUpdate(projectid)
  {
    
      
    this.props.dispatch(updateData(projectid))
    
    this.props.dispatch(createData())

  }
             

  render() {
    console.log( this.props.projects)

    const ProjectList = this.props.projects.map( detail => (
           
            
      <div key={detail.id}>
      <br />

      <table className="table-content" >
    
      <tr>
      <td >{detail.id}</td>
      <td >{detail.name}</td>
      <td className="create" >{detail.created_at}</td>
      
      <td >  <button onClick={this.onClickDelete.bind(this,detail.id)} > Delete</button></td>
      <td >  <button onClick={this.onClickUpdate.bind(this,detail.id)} >Update</button></td>
     
      </tr>
      
     
       </table>
   
  </div>

  ));
          return (
      <div>
             <h1>LIST OF PROJECTS</h1>
             <table>
             
             <tr  className="table-content">
             <th >Id</th>
             <th >Name</th>
             <th >Created Date</th>
             <th> Actions</th>
           
         
             
             </tr>
             </table>
              {ProjectList}
       </div>
    )
  }
}

const mapStateToProps = (state) => {
  
  const { projects , deleteinfo , updatepro} = state.rootReducer
   return { projects ,  deleteinfo , updatepro}
}
export default connect(mapStateToProps)(ProjectInfoForm)