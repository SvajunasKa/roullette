import React from 'react'
import Square from './squeare/Squeare'

const wheel = props => {
    console.log(props)
    return props.number.map((index, value) =>{
        return(
            <Square
                key = {index}
                colorIndex = {index}
                number={value}
                style = {props.color}
                position = {props.position[index]}
            />
        )
    })

};

export default wheel