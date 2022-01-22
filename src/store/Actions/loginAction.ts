import React from "react";

export const ADD_EMAIL = 'STORE_BRANDS'
export const STORE_PHONE ='STORE_PHONE'

export const savePhone = (res:string|undefined) => {
    return {
        type: 'STORE_PHONE',
        res
    }
}

// save single brand
export const saveEmail = (res:string|undefined) => {
    return {
        type: 'ADD_EMAIL',
        res
    }
}

