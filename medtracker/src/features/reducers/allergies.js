import * as type from '../types';

const initialState = {
    allergies:[],
    loading:false,
    success:false,
    updateId:null,
}

export default function allergyReducer(state = initialState, action){

    switch(action.type){

        case type.GET_ALLERGIES:
            return {
                ...state,
                loading: true
            }

        case type.GET_ALLERGIES_SUCCESS:
            return {
              ...state,
              allergies: action.memories,
              loading:false,
              success:true
            }
            
            case type.GET_ALLERGIES_FAILED:
                return {
                  ...state,
                  loading:false,
                  success:false
                }
     
            case type.ADD_ALLERGIES_SUCCESS:
                return {...state.allergies, action:action.allergy}
                    
            case type.DELETE_ALLERGIES_SUCCESS:
                console.log(action.id)
                return {
                    ...state,
                    memories: state.memories.filter(memory => memory._id!==action.id)
                }
        default:
            return state
    }
}
