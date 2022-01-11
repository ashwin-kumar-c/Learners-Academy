import React, { useState } from 'react'
import ModalComp from '../../reusables/ModalComp'
import { AiFillInfoCircle } from "react-icons/ai"

const CourseDetails = (props) => {
    const { name, description, author, category, createdAt, duration, level, students, validity } = props
    const [ show, setShow ] = useState(false)

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    return (
        <div>
            <ModalComp
                showVariant=""
                handleShow={ handleShow }
                showText={<AiFillInfoCircle size="1.5rem"/>}
                show={ show }
                handleClose={ handleClose }
                titleComponent={ <h5>Course Details</h5> }
                bodyComponent={
                    <div className="d-flex justify-content-between">
                        <h5>Course Name</h5>
                    </div>
                }
                hideVariant="outline-secondary"
                handleClose={ handleClose }
                hideText="Close"
                size="lg"
            />
        </div>
    )
}

export default CourseDetails 