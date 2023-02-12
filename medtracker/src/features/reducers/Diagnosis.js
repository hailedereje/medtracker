import * as type from '../types';

const initialState = {
    allergies:[],
    loading:false,
    success:false,
    updateId:null,
}

export default function diagnoReducer(state = initialState, action){

    switch(action.type){
        
        case type.GET_DIAGNOSIS:
            return {
                ...state,
                loading: true
            }
        case type.GET_DIAGNOSIS_SUCCESS:
            return {
              ...state,
              memories: action.memories,
              loading:false,
              success:true
            }
            case type.GET_DIAGNOSIS_FAILED:
                return {
                  ...state,
                  loading:false,
                  success:false
                }
                
        case type.DELETE_DIAGNOSIS_SUCCESS:
            console.log(action.id)
            return {
                ...state,
                memories: state.memories.filter(memory => memory._id!==action.id)
            }
        default:
            return state
    }
}
