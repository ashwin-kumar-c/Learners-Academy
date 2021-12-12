import React from 'react'
import { useDispatch } from 'react-redux'
import Button from '../../reusables/Button'
import { startDeleteStudent } from '../../../actions/adminActions'

const DeleteStudent = (props) => {
    const {_id} = props

    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(startDeleteStudent(_id))
    }

    return (
        <Button
            type="button"
            className="btn btn-outline-danger"
            value="Delete"
            handleClick={handleDelete}
        />
    )
}

export default DeleteStudent