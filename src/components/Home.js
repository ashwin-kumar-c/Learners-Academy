import React from 'react'
import { Image } from 'react-bootstrap'
import learning from '../assests/learning.svg'
import teaching from '../assests/teaching.svg'

const Home = (props) => {
    return (
        <div className="container text-center my-5">
            { localStorage.getItem('student-token') ? (
                <Image className="img-fluid" src={learning} alt={Image}/>
            ) : (
                <Image className="img-fluid" src={teaching} alt={Image}/>
            ) }
        </div>
    )
}

export default Home