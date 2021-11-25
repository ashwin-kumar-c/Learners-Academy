import React, { useState} from 'react'
import { useSelector } from 'react-redux'
import Heading from '../../reusables/Heading'
import Paragraph from '../../reusables/Paragraph'
import Register from './Register'
import Button from '../../reusables/Button'

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
                        email={ admin.data.email }
                        username={ admin.data.username }
                        academyName={ admin.data.academy.name }
                        _id={admin.data && admin.data._id}
                        handleToggle={ handleToggle }
                    />
                    <Button
                        type="button"
                        className="btn btn-outline-secondary my-3"
                        value="Cancel"
                        handleClick={handleToggle}
                    />
                </>
            ) : (
                <>
                    <Heading
                        className="my-4"
                        type="h3"
                        title="Account"
                    /> 
                    { Object.keys(admin.data).length > 0 ? (
                        <>
                            <Paragraph
                                className="lead"
                                text={`Username - ${admin.data.username}`}
                            />
                            <Paragraph
                                className="lead"
                                text={`Email - ${admin.data.email}`}
                            />
                            <Paragraph
                                className="lead"
                                text={`Role - ${admin.data.role}`}
                            />
                            <Paragraph
                                className="lead"
                                text={`Academy Name - ${ admin.data.academy.name }`}
                            />

                            <Button
                                type="button"
                                className="btn btn-warning py-1 px-4 my-2"
                                value="Edit"
                                handleClick={handleToggle}
                            />
                        </>
                    ) : (
                        <Paragraph text="Loading..."/>
                    ) }
                </>
            )}
            
            { admin.errors.account && <div className="text-danger my-5">{admin.errors.account}</div> }
        </div>
    )
}

export default Account