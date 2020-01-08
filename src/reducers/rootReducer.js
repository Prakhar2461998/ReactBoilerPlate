import { GET_FORM_REQUEST, GET_FORM_SUCCESS, GET_FORM_FAILURE, UPDATE_PROJECT_FORM_DATA } from '../constants/getform'
import { CREATE_FORM_REQUEST, CREATE_FORM_SUCCESS, CREATE_FORM_FAILURE } from '../constants/createform'
import { DELETE_FORM_REQUEST, DELETE_FORM_SUCCESS, DELETE_FORM_FAILURE } from '../constants/deleteform'
import { UPDATE_FORM_REQUEST, UPDATE_FORM_SUCCESS, UPDATE_FORM_FAILURE } from '../constants/updateform'
import { GET_DETAIL_REQUEST, GET_DETAIL_SUCCESS, GET_DETAIL_FAILURE } from '../constants/getdetails'
import { HANDLE_PROJECT_DETAILS } from '../constants/info'



const initialState =
{
  projects: [],
  error: {},
  message: " ",
  info: {},
  addproject: {},
  deleteinfo: {},
  updatepro: {},
  projdetails: {}, info: {},
  projName: "",
  projUrl: " ",
  projNamespace: " ",
  projrepo: " ",
  projType: "",
  projectFormData: {
    name: ' ',
    tracking_url: '',
    tracking_type: '',
    namespace: ' '
  },

  projectIsLoading: false,
  projectDeleteSuccess: false

}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_PROJECT_FORM_DATA: {
      console.log('reducerrrrrrrr',action.data)
      return Object.assign({}, state, {
        projectFormData: action.data
      })
    }
    case GET_FORM_REQUEST:
      {
        console.log('GET_FORM_REQUEST')
        return Object.assign({}, state, {
          projectIsLoading: true

        })

      }
    case GET_FORM_SUCCESS:
      {
        console.log('GET_FORM_SUCCESS')
        return Object.assign({}, state, {
          projectIsLoading: false,
          projects: action.response.data.list.length === 0 ? [] : action.response.data.list
        })
      }

    case GET_FORM_FAILURE:
      {
        console.log('GET_FORM_FAILURE')
        return Object.assign({}, state, {
          projectIsLoading: false

        })
      }



    case GET_DETAIL_REQUEST:
      {
        console.log('GET_DETAIL_REQUEST')
        return Object.assign({}, state, {

        })
      }

    case GET_DETAIL_SUCCESS:
      {
        console.log('GET_DETAIL_SUCCESS')
        
        return Object.assign({}, state, {
          // projdetails: action.response.data.project,
          projectFormData: {
            name: action.response.data.project.name,
            tracking_url:action.response.data.project.tracking_url,
             tracking_type:action.response.data.project.tracking_type,
             namespace:action.response.data.project.namespace
            
          }
          //   projName:action.response.data.project.name
          // projUrl:action.response.data.project.tracking_url,
          // projNamespace:action.response.data.project.namespace,
          // projrepo:action.response.data.project.repositories,
          // projType:action.response.data.project.tracking_type
        })



      }
    case GET_DETAIL_FAILURE:
      {

        console.log('GET_DETAIL_FAILURE')
        return Object.assign({}, state, {
        })
      }






    case CREATE_FORM_REQUEST:
      {
        console.log("CREATE_FORM_REQUEST")
        return Object.assign({}, state, {

        })
      }

    case CREATE_FORM_SUCCESS:
      {
        console.log("CREATE_FORM_SUCCESS")
        return Object.assign({}, state, {
          addproject: action.response.data,

        })
      }

    case CREATE_FORM_FAILURE:
      {
        console.log("CREATE_FORM_FAILURE")
        return Object.assign({}, state, {
          error: action.response.data.error
        })
      }






    case DELETE_FORM_REQUEST:
      {
        console.log("DELETE_FORM_REQUEST")
        return Object.assign({}, state, {

        })
      }

    case DELETE_FORM_SUCCESS:
      {
        console.log("DELTE_FORM_SUCCESS")

        return Object.assign({}, state, {

          error: false,
          message: "Data Successfully deleted ",
          deleteinfo: action.response.data,
          projectDeleteSuccess: true

        })

      }

    case DELETE_FORM_FAILURE:
      {
        console.log("DELTE_FORM_FAILURE")
        return Object.assign({}, state, {
          error: action.response.data.error
        })
      }





    case UPDATE_FORM_REQUEST:
      {
        console.log("UPDATE_FORM_REQUEST")
        return Object.assign({}, state, {
        })

      }
    case UPDATE_FORM_SUCCESS:
      {
        console.log("UPDATE_FORM_SUCCESS")
        return Object.assign({}, state, {

          updatepro: action.response.data
        })
      }
    case UPDATE_FORM_FAILURE:
      {
        console.log("UPDATE_FORM_FAILURE")
        return Object.assign({}, state, {
          error: action.response.data.error
        })
      }

    case HANDLE_PROJECT_DETAILS:
      {
        // console.log(info)
        console.log("HANDLE_PROJECT_DETAILS")
        return Object.assign({}, state, {
          info: action.reponse.data
        }
        )

      }


    default:
      return state;


  }

}