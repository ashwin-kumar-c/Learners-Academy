import React, { useState } from 'react'
import CreateCourse from './CreateCourse'
import ModalComp from '../../reusables/ModalComp'

const AddCourse = (props) => {
    const [ show, setShow ] = useState(false)

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    return (
        <div className="text-center">
            <ModalComp
                showVariant="outline-primary"
                handleShow={ handleShow }
                showText="+ New Course"
                show={ show }
                handleClose={ handleClose }
                titleComponent={ <h4>Create Course</h4> }
                bodyComponent={ <CreateCourse handleClose={ handleClose }/> }
                hideVariant="outline-secondary"
                handleClose={ handleClose }
                hideText="Close"
                size="lg"
            />
        </div>
    )
}

export default AddCourse