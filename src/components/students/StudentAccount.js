import React from 'react'
import { useSelector } from 'react-redux'
import Heading from '../reusables/Heading'
import Loader from '../reusables/Loader'
import Paragraph from '../reusables/Paragraph'

const StudentAccount = (props) => {
    const students = useSelector((state) => {
        return state.students
    })

    return (
        <div className="container">
            
            { Object.keys(students.data).length > 0 ? (
                <>
                    <Heading
                    className="mt-5 mb-4"
                    type="h2"
                    title="My Account"
                    />
                    <Paragraph
                        className="lead"
                        text={`Name - ${students.data.name}`}
                    />
                    <Paragraph
                        className="lead"
                        text={`Email - ${students.data.email}`}
                    />
                    <Paragraph
                        className="lead"
                        text={`Courses Enrolled - ${students.data.courses.length}`}
                    />
                </>
            ) : (
                <Loader
                    className="mt-5"
                />
            ) }
            { students.errors.studentAccountError && <div className="text-danger pt-5">{ students.errors.studentAccountError }</div> }
        </div>
    )
}

export default StudentAccount