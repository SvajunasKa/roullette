import React from 'react'
import './Square.scss'

const square = (props) =>{
    const background = props.style[props.colorIndex];
    const elementPosition = props.position;
    //console.log(elementPosition);
    return(
        <div className={'Box'} style={{backgroundColor: background}}>
            {props.number}
        </div>
    )
};
export default square