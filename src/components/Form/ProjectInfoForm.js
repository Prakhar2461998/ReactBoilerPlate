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
  //  this.setState({[projectid.target.name]: projectid.target.value});
    this.props.dispatch(createData())

  }
             

  render() {
    


    const ProjectList = this.props.projects.map( detail => (
           
            
      <div key={detail.id} className="grid-container">
      <br />

      <table className="table" >
     
     
      <tbody>
      <tr>
      <td data-lable="ID">{detail.id}</td>
      
      <td data-lable="NAME"> {detail.name}</td>
      <td data-lable="CREATEDAT"> {detail.created_at}</td>
      
      <td data-lable="ACTION">  <button onClick={this.onClickDelete.bind(this,detail.id)} > Delete</button></td>
      <td data-lable="ACTION">  <button onClick={this.onClickUpdate.bind(this,detail.id)}>Update</button></td>
     
    </tr>
    </tbody>
       
   </table>
  </div>

  ));
          return (
      <div>
             <h1>LIST OF PROJECTS</h1>
             
             <table className="table" >
        <thead>
            <th>ID</th>
            <th>Name</th>
            <th>CreatedAt</th>
            <th>Action</th>
            <th>Action</th>
    
            
        </thead>
        

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