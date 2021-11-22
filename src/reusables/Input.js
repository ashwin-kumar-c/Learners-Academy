import React from 'react'

const Input = (props) => {
    const { className, type, value, handleChange, name, placeholder } = props

    return (
        <input
            className={className}
            type={type}
            value={value}
            onChange={handleChange}
            name={name}
            placeholder={placeholder}
        />
    )
}

export default Input