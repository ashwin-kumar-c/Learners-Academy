import React from 'react'

const Input = (props) => {
    const { className, type, value, handleChange, handleBlur, name, placeholder, checked } = props

    return (
        <input
            className={className}
            type={type}
            value={value}
            checked={checked}
            onChange={handleChange}
            onBlur={handleBlur}
            name={name}
            placeholder={placeholder}
        />
    )
}

export default Input