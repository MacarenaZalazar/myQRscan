import {SAVE_QR, FILTER_QR} from './constants'

export const saveQR = (str) =>{
    return {type: SAVE_QR, payload: str }
}
export const filterQR = (str) =>{
    return {type: FILTER_QR, payload: str }
}


