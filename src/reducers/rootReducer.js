import {GET_FORM_REQUEST,GET_FORM_SUCCESS,GET_FORM_FAILURE} from '../constants/getform'
import {CREATE_FORM_REQUEST, CREATE_FORM_SUCCESS, CREATE_FORM_FAILURE } from '../constants/createform'
import {DELETE_FORM_REQUEST,DELETE_FORM_SUCCESS,DELETE_FORM_FAILURE }  from '../constants/deleteform'
import {UPDATE_FORM_REQUEST, UPDATE_FORM_SUCCESS ,UPDATE_FORM_FAILURE}  from '../constants/updateform'
  


const initialState=
{
  projects: [],
  
 error:{},
message:" ",
 addproject:{},
 deleteinfo:{}
}

export default function rootReducer(state = initialState , action)
{
    switch(action.type)
    {
                    case GET_FORM_REQUEST:
                        {
                           console.log('GET_FORM_REQUEST')
                           return Object.assign({}, state ,{
                            })
               
                        }
                     case GET_FORM_SUCCESS:
                        {
                            console.log('GET_FORM_SUCCESS')
                            return Object.assign({},state ,{projects:action.response.data.list
                             })
                         }

                      case GET_FORM_FAILURE:
                         {
                             console.log('GET_FORM_FAILURE')
                             return Object.assign({},state,{error:action.reponse.data.error
                            })
                         }

              
              
              
                        case CREATE_FORM_REQUEST:
                         {
                             console.log("CREATE_FORM_REQUEST")
                             return Object.assign({}, state ,{
                              })
                         }

                        case CREATE_FORM_SUCCESS:
                         { 
                             console.log("CREATE_FORM_SUCCESS")
                             return Object.assign({},state ,{addproject:action.response.data,
                              
                              })
                         }

                         case CREATE_FORM_FAILURE:
                         {
                              console.log("CREATE_FORM_FAILURE")
                              return Object.assign({},state,{error:action.reponse.data.error
                               })
                          }
            





                         case DELETE_FORM_REQUEST:
                          {
                              console.log("DELETE_FORM_REQUEST")
                              return Object.assign({},state,{

                              })
                          }

                         case DELETE_FORM_SUCCESS:
                          { 
                            console.log("DELTE_FORM_SUCCESS")
                              return Object.assign({} ,  state, {
                                
                                error:false,
                                message:"Data Successfully deleted ",
                                deleteinfo:action.response.data,
                                
                        
                              })
                          } 
 
                         case DELETE_FORM_FAILURE:
                          {
                            console.log("DELTE_FORM_FAILURE")
                              return Object.assign({},state,{error:action.response.data.error
                              })
                          }





                    //  case UPDATE_FORM_REQUEST:
                    //    {
                    //         return Object.assign({},state,{ 
                    //         })
                            
                    //    }
                    //  case UPDATE_FORM_SUCCESS:
                    //    {
                    //         return Object.assign({}, state , {updateinfo:action.response.data
                    //         })
                    //    }
                    //  case UPDATE_FORM_FAILURE:
                    //    {
                    //         return Object.assign({},state,{error:action.response.data.error
                    //         })
                    //    }
                  



                      default:
                        return state;
    

    }
   
}