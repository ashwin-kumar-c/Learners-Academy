import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EditStudent from './EditStudent'
import StudentDetails from './StudentDetails'
import DeleteStudent from './DeleteStudent'
import Button from '../reusables/Button'

const StudentsList = (props) => {

    const dispatch = useDispatch()

    const studentsData = useSelector((state) => {
        return state.admin.studentsData
    })

    return (
        <div className="row my-5">
            <div className="col-md-12">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <td> Name </td>
                            <td> Email </td>
                            <td> Allowed </td>
                            <td> Details </td>
                            <td> Edit </td>
                            <td> Delete </td>  
                        </tr>
                    </thead>
                    <tbody>
                        { studentsData.map((student) => {
                            return (
                                <tr key={ student._id }>
                                    <td>{ student.name }</td>
                                    <td>{ student.email }</td>
                                    <td>{ String(student.isAllowed) }</td>
                                    <td>
                                        <StudentDetails {...student} />
                                    </td>
                                    <td>
                                        <EditStudent {...student} />
                                    </td>
                                    <td>
                                        <DeleteStudent {...student} />
                                    </td>
                                </tr>
                            )
                        }) }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default StudentsList