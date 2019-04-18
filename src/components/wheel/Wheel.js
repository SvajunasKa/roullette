import React from 'react'
import Square from './squeare/Squeare'

const wheel = props => {
    const all_data = Object.values(props.config);
    return all_data.map((index, value) =>{
        return(
            <Square
                key = {value}
                colorIndex = {index.color}
                number={index.number}
                style = {index.color}
                position = {index.position}
            />
        )
    })

};

export default wheel