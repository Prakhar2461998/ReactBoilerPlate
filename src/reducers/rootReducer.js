import {GET_FORM_REQUEST,GET_FORM_SUCCESS,GET_FORM_FAILURE, CREATE_FORM_REQUEST, CREATE_FORM_SUCCESS, CREATE_FORM_FAILURE }  from '../constants/Index';
  


const initialState=
{
  employesinfo: [],
   employee:{},
   error:{}
}

export default function rootReducer(state = initialState , action)
{
    switch(action.type)
    {
        case GET_FORM_REQUEST:
          {
            return Object.assign({}, state ,{
            

            })
               
                
            
            }
               case GET_FORM_SUCCESS:
                 {
                 return Object.assign({},state ,{employesinfo:action.response.data
                 })
                 }

                 case GET_FORM_FAILURE:
                   {
                  return Object.assign({},state,{error:action.reponse.data.error


                   }
                  )
                   }

               case CREATE_FORM_REQUEST:
                 {
                   
                  return Object.assign({}, state ,{
            

                  })



                 }

                 case CREATE_FORM_SUCCESS:

        {

          {
            return Object.assign({},state ,{employee:action.response.data
            })
            }


        }

               case CREATE_FORM_FAILURE:{
                      

                return Object.assign({},state,{error:action.reponse.data.error


                })

               }
            

 

            default:
                return state;
                      
                

    }
   
}