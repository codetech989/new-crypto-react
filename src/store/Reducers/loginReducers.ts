import * as actionTypes from '../Actions/loginAction'

const initialState = {
    loginEmail: '',
    loginPhone: '',
}

export const loginReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case actionTypes.ADD_EMAIL:
            console.log(action)
            return {
                ...state,

                loginEmail: action.value
            }
        case actionTypes.STORE_PHONE:
            return {
                ...state,
                // loginPhone:action
            }
    }
    return state
}

