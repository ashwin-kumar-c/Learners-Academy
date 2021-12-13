import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddCourse from './AddCourse'
import Heading from '../../reusables/Heading'
import { startGetCourses } from '../../../actions/adminActions'

const Courses = (props) => {
    // const [ userRole, setUserRole ] = useState('')
    // const [ courseData, setCourseData ] = useState([])
    // console.log('cd', courseData)   
    
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
            <div className="row">
                <div className="col-10 pt-5">
                    <Heading
                        type="h3"
                        title={`All courses - ${adminCourseData.length}`}
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