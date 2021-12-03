import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import StudentRegister from './StudentRegister'

const EditStudent = (props) => {
    const { name, email, isAllowed, role, _id } = props
    const [ toggle, setToggle ] = useState(false)
    const [ show, setShow ] = useState(false)

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <div>
            <Button variant="warning" onClick={handleShow}>
                Edit
            </Button>

            <Modal show={ show } onHide={ handleClose }>
                <Modal.Header>
                    <Modal.Title><h4 className="ms-3">Edit Student</h4></Modal.Title>
                </Modal.Header>

                <Modal.Body>    
                    <>
                    <StudentRegister
                        name={ name }
                        email={ email }
                        isAllowed={ String(isAllowed) }
                        role={ role }
                        handleToggle={ handleToggle }
                        _id={ _id }
                        handleClose={ handleClose }
                    />
                    </> 
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            
        </div>
    )
}

export default EditStudent