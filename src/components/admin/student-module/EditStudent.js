import React, { useState } from 'react'
import ModalComp from '../../reusables/ModalComp'
import StudentRegister from './StudentRegister'

const EditStudent = (props) => {
    const { name, email, isAllowed, role, _id } = props
    const [ show, setShow ] = useState(false)

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    return ( 
        <>
            <ModalComp
                showVariant="outline-warning"
                handleShow={ handleShow }
                showText="Edit"
                show={ show }
                handleClose={handleClose}
                size="lg"
                titleComponent={ <h4 className="ms-3"> Edit Student </h4> }
                bodyComponent={
                    <StudentRegister
                        name={ name }
                        email={ email } 
                        isAllowed={ isAllowed }
                        role={ role }
                        _id={ _id }
                        handleClose={ handleClose }
                    /> 
                }
                hideVariant="outline-secondary"
                hideText="close"
            />
        </>
    )
}

export default EditStudent