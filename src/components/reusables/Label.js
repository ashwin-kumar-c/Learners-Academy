import React from 'react'

const Label = (props) => {
    const { className, text } = props
    return (
        <label className={className}>
            { text }
        </label>
    )
}

export default Label