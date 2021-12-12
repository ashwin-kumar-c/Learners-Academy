import React from 'react'
import AddCourse from './AddCourse'
import Heading from '../../reusables/Heading'

const Courses = (props) => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-10 pt-5">
                    <Heading
                        type="h3"
                        title={`All courses - `}
                    />
                </div>
                <div className="col-2 pt-5">
                    <AddCourse/>
                </div>
            </div>
        </div>
    )
}

export default Courses 