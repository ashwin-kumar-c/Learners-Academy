import React from 'react-redux'

const Textarea = (props) => {
    const { className, value, handleChange, name, placeholder } = props

    return (
        <textarea 
            className={className}
            value={value}
            onChange={handleChange}
            name={name}
            placeholder={placeholder}
        ></textarea>
    )
}

export default Textarea