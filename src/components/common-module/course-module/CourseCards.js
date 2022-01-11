import React from 'react'
import { useSelector } from 'react-redux'
import Button from '../../reusables/Button'
import Image from '../../reusables/Image'
import { AiFillInfoCircle } from "react-icons/ai"
import CourseDetails from './CourseDetails'
import css_logo from '../../../assests/css_logo.png'
import html_logo from '../../../assests/html_logo.png'
import javascript_logo from '../../../assests/javascript_logo.png'
import react_logo from '../../../assests/react_logo.png'
import node_logo from '../../../assests/node_logo.png'
import express_logo from '../../../assests/express_logo.png'
import MongoDB_logo from '../../../assests/MongoDB_logo.gif'


const CourseCards = (props) => {
    const courseData = useSelector((state) => {
        return state.admin.coursesData
    })
    console.log(courseData)

    return (
        <div className="row py-5">
            { courseData.map((course) => {
                return (
                    <div className="col-sm-3 my-3 py-3 py-sm-0" key={course._id}>
                        <div className="card">
                            { course.category === 'CSS' && (
                                <Image
                                src={ css_logo }
                                alt="CSS Logo"
                                />
                            ) }
                            { course.category === 'HTML' && (
                                <Image
                                src={ html_logo }
                                alt="HTML Logo"
                                />
                            ) }
                            { course.category === 'javascript' && (
                                <Image
                                src={ javascript_logo }
                                alt="JavaScript Logo"
                                />
                            ) }
                            { course.category === 'reactjs' && (
                                <Image
                                src={ react_logo }
                                alt="React Logo"
                                />
                            ) }
                            { course.category === 'nodejs' && (
                                <Image
                                src={ node_logo }
                                alt="Node Logo"
                                />
                            ) }
                            { course.category === 'expressjs' && (
                                <Image
                                src={ express_logo }
                                alt="Express Logo"
                                />
                            ) }
                            { course.category === 'mongodb' && (
                                <Image
                                src={ MongoDB_logo }
                                alt="MongoDB Logo"
                                />
                            ) }

                            <div className="card-body">
                                <p className="card-text lead">{ course.name }</p >
                                <CourseDetails {...course}/>
                                
                            </div>
                        </div>
                    </div>
                )
            }) }
        </div>
    )
}

export default CourseCards