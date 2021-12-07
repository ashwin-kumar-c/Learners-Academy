import React from 'react'
import Image from './Image'
import loading from '../../assests/loading.gif'

const Loader = (props) => {
    const { className } = props
    return (
        <div>
            <Image 
                className={className}
                src={loading}
                alt="loading..."
            />
        </div>
    )
}

export default Loader