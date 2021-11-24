import React from 'react'
import { useSelector } from 'react-redux'
import Heading from '../../reusables/Heading'
import Paragraph from '../../reusables/Paragraph'

const Account = (props) => {

    const admin = useSelector((state) => {
        return state.admin
    })
    // console.log('name', admin.data)

    return (
        <div className="container my-5">
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
                </>
            ) : (
                <Paragraph text="Loading..."/>
            ) }
            

            { admin.errors.account && <div className="text-danger my-5">{admin.errors.account}</div> }
        </div>
    )
}

export default Account