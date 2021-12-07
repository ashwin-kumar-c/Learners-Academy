import React from 'react'
import { useSelector } from 'react-redux'
import Heading from '../reusables/Heading'
import Loader from '../reusables/Loader'
import Paragraph from '../reusables/Paragraph'

const StudentAccount = (props) => {
    const data = useSelector((state) => {
        return state.students.data
    })

    return (
        <div className="container">
            
            { Object.keys(data).length > 0 ? (
                <>
                    <Heading
                    className="mt-5 mb-4"
                    type="h2"
                    title="My Account"
                    />
                    <Paragraph
                        className="lead"
                        text={`Name - ${data.name}`}
                    />
                    <Paragraph
                        className="lead"
                        text={`Email - ${data.email}`}
                    />
                    <Paragraph
                        className="lead"
                        text={`Courses Enrolled - ${data.courses.length}`}
                    />
                </>
            ) : (
                <Loader
                    className="mt-5"
                />
            ) }
            
        </div>
    )
}

export default StudentAccount