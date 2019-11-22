import { createContext } from 'react'

const temperatureContext = createContext({
    temp: Number, 
    increaseTemp: ()=>{}, 
    decreaseTemp: ()=>{} 
})


export default temperatureContext; 