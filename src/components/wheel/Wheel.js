import React from 'react'
import Square from './squeare/Squeare'

const wheel = props => {
    console.log(props)
    return props.number.map((cube) =>{
        return(
            <Square
                number={cube}
            />
        )
    })

};

export default wheel