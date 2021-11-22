import React from 'react'

const Paragraph = (props) => {
    const { className, text } = props
    
    return (
        <p className={className} > {text} </p>
    )
}

export default Paragraph