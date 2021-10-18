import {SAVE_QR, FILTER_QR} from './constants'

const initialState = {
    allQRS:[],
    filteredQRS: []
}

const reducer = (state = initialState, action) =>{
    const {type, payload} = action
    switch(type){
        case SAVE_QR:
            if(!state.allQRS.includes(payload)){
                return {
                    ...state,
                    allQRS: [...state.allQRS, payload]
                }
            } else {
                return state
            }
        case FILTER_QR:
            if(payload) {
                return {...state, filteredQRS: state.allQRS.filter(e => e.includes(payload))}
            } else {
                return {...state, filteredQRS: state.allQRS }  
            }
        default:
            return state
    }
}

export default reducer;