import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Heading from '../reusables/Heading'
import { startGetStudents } from '../../actions/adminActions'
import StudentsList from './StudentsList'

const Students = (props) => {

    const dispatch = useDispatch()

    useEffect(() => {
        const token = localStorage.getItem('admin-token')
        dispatch(startGetStudents(token))
    }, [])

    const studentsData = useSelector((state) => {
        return state.admin.studentsData
    })
    // console.log(studentsData)

    return (
        <div className="container">
            <div className="row">
                <div className="col-10">
                    <Heading
                        className="pt-5"
                        type="h3"
                        title={ `Total Students - ${studentsData.length}` }
                    />
                </div>    
                <div className="col-2 pt-5">
                    <Link to="/admin/students/register" className="btn btn-primary "> New Student </Link>
                </div>    
            </div>
            
            <StudentsList/>
        </div>
    )
}

export default Students