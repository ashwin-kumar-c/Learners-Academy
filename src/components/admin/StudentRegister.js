import React from 'react'
import { useFormik, Field } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import Heading from '../reusables/Heading'
import Input from '../reusables/Input'
import Button from '../reusables/Button'
import Label from '../reusables/Label'
import { startRegisterStudent } from '../../actions/adminActions'

const StudentRegister = (props) => {

    const dispatch = useDispatch()

    const serverError = useSelector((state) => {
        return state.admin.errors
    })

    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email format').required('Required'),
        password: Yup.string().min(8).max(128).required('Required'),
        isAllowed: Yup.string().required('Required')
    })

    const { handleChange, handleBlur, handleSubmit, values, touched, errors} = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            isAllowed: true,
            checked: []
        },
        onSubmit: (values, { resetForm }) => {
            const redirect = () => {
                props.history.push('/admin/students') 
            }
            dispatch(startRegisterStudent(values, resetForm, redirect))
            console.log(values)
        },
        validationSchema
    })

    const handleClick = () => {
        props.history.push('/admin/students')
    }

    return (
        <div className="container">
            <Heading
                className="my-4"
                type="h3"
                title='Register New Student'
            />

            <form onSubmit={ handleSubmit }>
                <div className="row mb-3 ">
                    <div className="col-sm-4">
                        <Input
                            className="form-control"
                            type="text"
                            value={ values.name }
                            handleChange={ handleChange }
                            handleBlur={ handleBlur }
                            name="name"
                            placeholder="Enter name"
                        />
                        { touched.name && errors.name ? <div className="form-text">{ errors.name }</div> : null }
                    </div>
                </div>

                <div className="row mb-3 ">
                    <div className="col-sm-4">
                        <Input
                            className="form-control"
                            type="text"
                            value={values.email}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            name="email"
                            placeholder="Enter email"
                        />
                        { touched.email && errors.email ? <div className="form-text">{ errors.email }</div> : null }
                    </div>
                </div>

                <div className="row mb-3 ">
                    <div className="col-sm-4">
                        <Input
                            className="form-control"
                            type="password"
                            value={values.password}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            name="password"
                            placeholder="Enter password"
                        />
                        { touched.password && errors.password ? <div className="form-text">{ errors.password }</div> : null }
                    </div>
                </div>

                <div className="form-check">
                    <Label 
                        className="form-check-label"
                        text="Allowed"
                    />

                    <Input
                        className="form-check-input"
                        type="checkbox"
                        checked={values.isAllowed}   
                        handleChange={handleChange}
                        name="isAllowed"
                        placeholder="Enter isAllowed"
                    />
                </div>

                <Input
                    className="btn btn-outline-primary mt-3 me-4"
                    type="submit"
                    value="Register"
                />

                <Button
                    type="button"
                    className="btn btn-outline-secondary mt-3"
                    handleClick={ handleClick }
                    value="Cancel"
                />
            </form>
            { serverError.registerStudent && <div className="text-danger py-4">{ serverError.registerStudent }</div> }
        </div>
    )
}

export default StudentRegister