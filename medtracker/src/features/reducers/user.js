import * as type from '../types';

const initailState= {
    loading:false,
    success:false,
    user:JSON.parse(localStorage.getItem('addis'))||null
}
export default function userReducer(state=initailState, action){
    switch(action.type){
        case type.USER_LOGIN:
            return {
                ...state,
                loading:true
            }
        case type.CREATE_USER_SUCCESS:
            localStorage.setItem('addis',JSON.stringify(action.user))
            return {
                user:action.user,
                success:true
            }
            case type.LOGIN_SUCCESS:
                localStorage.setItem('addis',JSON.stringify(action.user))
                return {
                     ...state, user:action.user,
                     success:true
                    }
            case type.LOGOUT:
                localStorage.clear()
                return{
                    ...state,
                    user:null
                }
        default:
            return state
    }
}