import { INCREASE_TEMP, DECREASE_TEMP} from './types'

const increaseTemp = (direction, state) => {
    
}

const decreaseTemp = (direction, state) => {

}

//REDUCER SWITCHBOARD LOGIC
export default (state, action) => {
    switch(action.type){
        case INCREASE_TEMP:
            return increaseTemp()
        case DECREASE_TEMP: 
            return decreaseTemp()
        default: 
            return state; 
    }
}