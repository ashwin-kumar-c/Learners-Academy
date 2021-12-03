import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EditStudent from './EditStudent'
import StudentDetails from './StudentDetails'
import DeleteStudent from './DeleteStudent'


const StudentsList = (props) => {

    const dispatch = useDispatch()

    const admin = useSelector((state) => {
        return state.admin
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
                        { admin.studentsData.map((student) => {
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
            { admin.errors.getStudentsError && <div className="text-danger my-5">{ admin.errors.getStudentsError }</div> }
            { admin.errors.deleteStudentError && <div className="text-danger my-5">{ admin.errors.deleteStudentError }</div> }
        </div>
    )
}

export default StudentsList