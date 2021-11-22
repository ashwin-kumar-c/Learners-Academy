import React from 'react'

const Button = (props) => {
    const {className, value, handleClick } = props

    return (
        <button 
            className={className} 
            onClick={handleClick}
        >
        {value}
        </button>
    )
}

export default Button