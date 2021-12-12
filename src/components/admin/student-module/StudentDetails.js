import React, { useState } from 'react'
import ModalComp from '../../reusables/ModalComp'

const StudentDetails = (props) => {
    const { name, email, isAllowed, role } = props
    const [ show, setShow ] = useState(false)

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    return (
        <>
            <ModalComp
                showVariant="outline-info"
                handleShow={ handleShow }
                showText="Details"
                show={ show }
                handleClose={handleClose}
                size="md"
                titleComponent={ <h4>{ name }'s Details</h4> }
                bodyComponent={
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
                }
                hideVariant="outline-secondary"
                hideText="close"
            />
        </>
    )
}

export default StudentDetails 