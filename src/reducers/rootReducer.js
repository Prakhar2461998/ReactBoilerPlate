import {GET_FORM_REQUEST,GET_FORM_SUCCESS,GET_FORM_FAILURE }  from '../constants/Index';
  


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

           
        
            // case :
            //     return{
            //         ...state,
            //         detail:action.payload
            //     }

 

            default:
                return state;
                      
                

    }
   
}