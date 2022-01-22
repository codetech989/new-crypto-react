import * as actionTypes from '../Actions/loginAction'

const initialState = {
    loginEmail: '',
    loginPhone: '',
}

export const loginReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case actionTypes.STORE_EMAIL:
            return {
                ...state,
                loginEmail: action.res,
            }
        case actionTypes.STORE_PHONE:
            return {
                ...state,
                loginPhone:action.res,
            }
    }
    return state
}

