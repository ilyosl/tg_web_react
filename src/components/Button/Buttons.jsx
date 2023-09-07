import React from 'react'
import './Button.css';
const Buttons = (props) => {
    return (
        <button  {...props} className={'button'+props.className }/>
    )
}

export default Buttons;