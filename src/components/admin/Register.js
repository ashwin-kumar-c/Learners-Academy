import React from 'react'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Heading from '../../reusables/Heading'
import Input from '../../reusables/Input'
import Button from '../../reusables/Button'
import { startRegsiterAdmin } from '../../actions/adminActions'

const Register = (props) => {

    const dispatch = useDispatch()

    const validationSchema = Yup.object({
        username: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email format').required('Required'),
        password: Yup.string().min(8).max(128).required('Required'),
        academy: Yup.object({
            name: Yup.string().required('Academy name required')
        })
    })

    const { handleChange, handleBlur, handleSubmit, values, errors, touched} = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            academy: {
                name: ''
            }
        },
        onSubmit: (values, { resetForm }) => {
            const redirect = () => {
                props.history.push('/admin/login')
            }
            dispatch(startRegsiterAdmin(values, resetForm, redirect))
        },
        validationSchema
    })

    console.log('form values', values)


    const handleClick = () => {
        props.history.push('/')
    }

    return (
        <div className="container my-5">
            <Heading
                className="my-4"
                type="h2"
                title='Register here'
            />
            
            <form onSubmit={handleSubmit}>
                <div className="row mb-3 ">
	                <div className="col-sm-6">
                        <Input
                            className="form-control"
                            type="text"
                            value={values.username}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            name="username"
                            placeholder="Enter username"
                        />
                        { touched.username && errors.username ? <div className="form-text">{errors.username}</div> : null }
	                </div>
                </div>

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
                        { touched.email && errors.email ? <div className="form-text">{errors.email}</div> : null }
                    </div>
                </div>

                <div className="row mb-3 ">
                    <div className="col-sm-6">
                        <Input
                            className="form-control"
                            type="text"
                            value={values.password}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            name="password"
                            placeholder="Enter password"
                        />
                        { touched.password && errors.password ? <div className="form-text">{errors.password}</div> : null }
                    </div>
                </div>

                <div className="row mb-3 ">
                    <div className="col-sm-6">
                        <Input
                            className="form-control"
                            type="text"
                            value={values.academy.name}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            name="academy.name"
                            placeholder="Enter academy name"
                        />
                        { Object.keys(touched).includes('academy') && Object.keys(errors).includes('academy')? <div className="form-text">{errors.academy.name}</div> : null  }
                    </div>
                </div>
                
                <Input
                    className="btn btn-outline-primary mt-3 me-4"
                    type="submit"
                    value="Register"
                />

                <Button
                    type="button"
                    className="btn btn-outline-secondary mt-3"
                    handleClick={handleClick}
                    value="Cancel"
                />
            </form>
        </div>
    )
}

export default Register
