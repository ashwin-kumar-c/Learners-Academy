import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Heading from '../../reusables/Heading'
import Input from '../../reusables/Input'
import Button from '../../reusables/Button'

const Register = (props) => {

    const validationSchema = Yup.object({
        username: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email format').required('Required'),
        password: Yup.string().min(8).max(128).required('Required'),
        name: Yup.string().required('Required')
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
            console.log(values)  // dispatch to be here
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
                        { touched.username && errors.username ? <div>{errors.username}</div> : null }
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
                        { touched.email && errors.email ? <div>{errors.email}</div> : null }
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
                        { touched.password && errors.password ? <div>{errors.password}</div> : null }
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
                            name="academy-name"
                            placeholder="Enter academy name"
                        />
                        { touched.name && errors.name ? <div>{errors.name}</div> : null }
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
