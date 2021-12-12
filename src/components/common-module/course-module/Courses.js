import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import AddCourse from './AddCourse'
import Heading from '../../reusables/Heading'

const Courses = (props) => {
    const [ userRole, setUserRole ] = useState('')
    const [ courseData, setCourseData ] = useState([])
    console.log('ur', userRole)  
    console.log('cd', courseData)       

    const adminCourseData = useSelector((state) => {
        return state.admin.coursesData
    })

    const serverError = useSelector((state) => {
        return state.admin.errors
    })

    useEffect(() => {
        const role = localStorage.getItem('role')
        setUserRole(role)
    }, [])

    useEffect(() => {
        if(userRole === 'admin') {
            setCourseData(adminCourseData)
        }
    }, [])

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-10 pt-5">
                    <Heading
                        type="h3"
                        title={`All courses - ${courseData.length}`}
                    />
                </div>
                <div className="col-2 pt-5">
                    <AddCourse/>
                </div>
            </div>
            { serverError.getCoursesError && <div className="text-danger mt-5">{ serverError.getCoursesError }</div> }
        </div>
    )
}

export default Courses 