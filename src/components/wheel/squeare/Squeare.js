import React from 'react'
import style from './Square.scss'

const square = (props) =>{
     console.log(props)
   // const backgroundColor = props.color

    //console.log(backgroundColor)
    return(
        <div className={style.Box} >
            {props}
        </div>
    )
}
export default square