import React, { Component } from 'react'

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



  onChange(e)
  {
      this.setState({[e.target.name]: e.target.value});
     
  }

  onSubmit(e)
  {
       e.preventDefault();
       const body = {
          name:this.state.name,
          toolurl:this.state.toolurl,
          namespace:this.state.namespace,
          repo:this.state.repo
          
       };
      
       
     
      this.props.createData(body);
                  }



    render() {
        return (
            <div>
                <h1>EDIT FROM DETAILS</h1>
                 

                <form onSubmit={this.onSubmit}>
           
                <label>PROJECT NAME</label><br />
               
                <input type="text"  name="name" value={this.state.name} onChange={this.onChange} minLength="3" required>
                </input>
                <br />
                <br />
                <label>TRACKING TYPE</label>
                <br />
                <br />
                <input type="radio" />
                <label>Jira</label>
                <input type="radio" style={{marginLeft:"10%"}} />
                <label>Redmine</label>
                <br />
                <br />
              
                <label>TARCKING URL:</label>
                <input type="text"  name="toolurl" value={this.state.toolurl} onChange={this.onChange}  required></input>
       
                
                   
                <label  style={{marginLeft:"10%"}}>NAMESPACE:</label>
                <input type="text"  name="namespace" value={this.state.namespace }  onChange={this.onChange}  required/>
                <br/>
                <br />
                <label style={{marginLeft:"1%"}}>REPOSITORY:</label> 
                <input type="text"  name="repo" value={this.state.repo} onChange={this.onChange}  required></input>
                
                <button  style={{marginLeft:"10%" ,borderRadius:"10px", backgroundColor:"#4CAF50",padding:"6px",paddingRight:"18px",paddingLeft:"18px"}}>Add</button>
               </form>
               <br />

            </div>
        )
    }
}

CreateProjectForm.propTypes={
    createData: PropTypes.func.isRequired
  };
  
  const mapStateToProps = (state) => {
    
    const { addproject } = state.rootReducer
     return { addproject }
  }
  export default connect(mapStateToProps)(EditForm)
