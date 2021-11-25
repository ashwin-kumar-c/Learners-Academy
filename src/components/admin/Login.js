import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Heading from '../../reusables/Heading'
import Input from '../../reusables/Input'
import Button from '../../reusables/Button'
import { startLoginAdmin } from '../../actions/adminActions'

const Login = (props) => {

    const dispatch = useDispatch()

    const serverError = useSelector((state) => {
        return state.admin.errors
    })

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Required'),
        password: Yup.string().min(8).max(128).required('Required')
    })

    const { handleChange, handleBlur, handleSubmit, values, errors, touched } = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: (values, { resetForm }) => {
            const redirect = () => {
                props.history.push('/')
            }
            dispatch(startLoginAdmin(values, resetForm, redirect))
        },
        validationSchema
    })

    const handleClick = () => {
        props.history.push('/')
    }

    return (
        <div className="container my-5">
            <Heading
                className="my-4"
                type="h3"
                title='Login here'
            />
            
            <form onSubmit={handleSubmit}>
                <div className="row mb-3 ">
                    <div className="col-sm-6">
                        <Input
                            className="form-control"
                            type="text"
                            value={values.email}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            name="email"
                            placeholder="Enter email"
                        />
                        { touched.email && errors.email ? <div className="form-text">{errors.email}</div> : null}
                    </div>
                </div>

                <div className="row mb-3 ">
                    <div className="col-sm-6">
                        <Input
                            className="form-control"
                            type="password"
                            value={values.password}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            name="password"
                            placeholder="Enter password"
                        />
                        { touched.password && errors.password ? <div className="form-text">{errors.password}</div> : null}
                    </div>
                </div>
                
                <Input
                    className="btn btn-outline-primary mt-3 me-4"
                    type="submit"
                    value="Login"
                />

                <Button
                    type="button"
                    className="btn btn-outline-secondary mt-3"
                    handleClick={handleClick}
                    value="Cancel"
                />
            </form>
            { serverError.login && <div className="text-danger m-4">{serverError.login}</div> }
        </div>
    )
}

export default Login