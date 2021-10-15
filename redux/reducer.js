import {SAVE_QR, FILTER_QR} from './constants'

const initialState = {
    allQRS:[
        "https://www.youtube.com/watch?v=hXDMWeD0ERM",
        "https://www.instagram.com/mz.musica/",
        "https://www.youtube.com/channel/UCRqBymupg7ZSTN79nRaGtlg",
      ],
    filteredQRS: []
}

export default reducer = (state = initialState, action) =>{
    const {type, payload} = action
    switch(type){
        case SAVE_QR:
            return {
                ...state,
                allQRS: [...state.allQRS, payload]
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