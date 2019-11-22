import { INCREASE_TEMP, DECREASE_TEMP, UPDATE_DELTA} from './types'

const increaseTemp = (delta, state) => {
    return {
        ...state, 
        temp: state.temp + delta
    }
}

const decreaseTemp = (delta, state) => {
     return {
        ...state, 
        temp: state.temp + delta
    }
}

const updateDelta = (newDelta, state) => {
    return {
        ...state, 
        delta: newDelta
    }
}

//REDUCER SWITCHBOARD LOGIC
export default (state, action) => {
    switch(action.type){
        case INCREASE_TEMP:
            return increaseTemp(action.payload, state)
        case DECREASE_TEMP: 
            return decreaseTemp(action.payload, state)
        case UPDATE_DELTA: 
            return updateDelta(action.payload, state)
        default: 
            return state; 
    }
}