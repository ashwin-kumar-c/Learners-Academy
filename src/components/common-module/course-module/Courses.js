import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddCourse from './AddCourse'
import Heading from '../../reusables/Heading'
import CourseCards from './CourseCards'
import { startGetCourses } from '../../../actions/adminActions'

const Courses = (props) => {
    // const [ userRole, setUserRole ] = useState('')
    // const [ courseData, setCourseData ] = useState([])
    
    const dispatch = useDispatch()

    useEffect(() => {
        const token = localStorage.getItem('admin-token')
        if(token) {
            dispatch(startGetCourses(token))
        }
    }, [])

    const adminCourseData = useSelector((state) => {
        return state.admin.coursesData
    })

    const serverError = useSelector((state) => {
        return state.admin.errors
    })

    return (
        <div className="container my-5">
            <div className="d-flex justify-content-between">
                <Heading
                    type="h3"
                    title={`All courses - ${adminCourseData.length}`}
                />
                <AddCourse/> 
            </div>
            <CourseCards/>

            { serverError.getCoursesError && <div className="text-danger mt-5">{ serverError.getCoursesError }</div> }
        </div>
    )
}

export default Courses 