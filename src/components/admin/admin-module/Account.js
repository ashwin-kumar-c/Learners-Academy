import React, { useState} from 'react'
import { useSelector } from 'react-redux'
import Heading from '../../reusables/Heading'
import Paragraph from '../../reusables/Paragraph'
import Register from './Register'
import Button from '../../reusables/Button' 
import Loader from '../../reusables/Loader'

const Account = (props) => {
    const [ toggle, setToggle ] = useState(false)

    const admin = useSelector((state) => {
        return state.admin
    })

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <div className="container my-5">
            { toggle ? (
                <>
                    <Register
                        email={ admin.adminData.email }
                        username={ admin.adminData.username }
                        academyName={ admin.adminData.academy.name }
                        role={ admin.adminData.role }
                        handleToggle={ handleToggle }
                    />
                    <Button
                        type="button"
                        className="btn btn-outline-secondary my-3 mx-2" 
                        value="Cancel"
                        handleClick={ handleToggle }
                    /> 
                </>
            ) : (
                <>
                    { Object.keys(admin.adminData).length > 0 ? (
                        <>
                            <Heading
                                className="my-4"
                                type="h3"
                                title="Account"
                            /> 
                            <Paragraph
                                className="lead"
                                text={`Username - ${admin.adminData.username}`}
                            />
                            <Paragraph
                                className="lead"
                                text={`Email - ${admin.adminData.email}`}
                            />
                            <Paragraph
                                className="lead"
                                text={`Role - ${admin.adminData.role}`}
                            />
                            <Paragraph
                                className="lead"
                                text={`Academy Name - ${ admin.adminData.academy.name }`}
                            />

                            <Button
                                type="button"
                                className="btn btn-warning py-1 px-4 my-2"
                                value="Edit"
                                handleClick={handleToggle}
                            />
                        </>
                    ) : (
                        <Loader/>
                    ) }
                </>
            )}
            { admin.errors.account && <div className="text-danger my-5">{admin.errors.account}</div> }
        </div>
    )
}

export default Account