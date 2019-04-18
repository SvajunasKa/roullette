import React from 'react'
import './Square.scss'

const square = (props) =>{
     const background = props.colorIndex;
    return(
        <div className={'Box'} style={{backgroundColor: background}}>
            {props.number}
        </div>
    )
};
export default square