import React from 'react-redux'

const Textarea = (props) => {
    const { className, value, handleChange, name, placeholder, handleBlur } = props

    return (
        <textarea 
            className={className}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            name={name}
            placeholder={placeholder}
        ></textarea>
    )
}

export default Textarea