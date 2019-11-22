import React, { useContext } from 'react'
import TemperatureContext from '../context/TemperatureContext'

const DeltaSetting = (props) => {
    const context = useContext(TemperatureContext)

  
    return (
        <select onChange={context.updateDelta}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
        </select>
    )
}

export default DeltaSetting