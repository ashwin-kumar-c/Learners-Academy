import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

const StudentDetails = (props) => {
    const { name, email, isAllowed, role } = props
    const [ show, setShow ] = useState(false)
    // console.log(email)

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    return (
        <>
            <Button variant="info" onClick={handleShow}>
                Details
            </Button>
            <Modal show={ show } onHide={ handleClose }>
                <Modal.Header>
                    <Modal.Title><h4 className="text-primary">{ name }'s Details</h4></Modal.Title>
                </Modal.Header>

                <Modal.Body>    
                    <>
                    <div className="d-flex justify-content-between">
                        <h5>Name </h5> <p className="lead">{ name }</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5>Email ID</h5> <p className="lead">{ email }</p>
                    </div>
                    
                    <div className="d-flex justify-content-between">
                        <h5>Allowed</h5> <p className="lead">{ String(isAllowed) }</p>
                    </div>

                    <div className="d-flex justify-content-between">
                        <h5>Role</h5> <p className="lead">{ role }</p>
                    </div>
                    </> 
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default StudentDetails
