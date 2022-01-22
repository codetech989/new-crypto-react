import React from "react";

export const STORE_EMAIL = 'STORE_EMAIL'
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
        type: 'STORE_EMAIL',
        res
    }
}

