import {
    USER_DATA
} from '../actions/types.js';

const initialState = {
    user_data: null
}

export default function(state = initialState, {type, payload}){
    switch(type){
        case USER_DATA:
            return {
                ...state,
                user_data: payload
            }
        default: 
            return state;
    }
}