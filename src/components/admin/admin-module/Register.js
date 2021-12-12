import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Input from '../../reusables/Input'
import Button from '../../reusables/Button'
import Heading from '../../reusables/Heading'
import { startRegsiterAdmin, startUpdateAdmin } from '../../../actions/adminActions'

const Register = (props) => {
    const { email: adminEmail, username: adminUsername, academyName, role, handleToggle } = props

    const dispatch = useDispatch()

    const serverError = useSelector((state) => {
        return state.admin.errors
    })

    const validationSchema = Yup.object({
        username: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email format').required('Required'),
        password: role !== 'admin' && (Yup.string().min(8).max(128).required('Required')),
        academy: Yup.object({
            name: Yup.string().required('Academy name required')
        })
    })

    const { handleChange, handleBlur, handleSubmit, values, errors, touched } = useFormik({
        initialValues: {
            username: adminUsername ? adminUsername : '',
            email: adminEmail ? adminEmail : '',
            password: '',
            academy: {
                name: academyName ? academyName : '',
                website: '' 
            }
        },
        onSubmit: (values, { resetForm }) => {
            const redirect = () => {
                props.history.push('/admin/login')
            }
            if(role === 'admin') {
                dispatch(startUpdateAdmin(values, resetForm, props))
            } else {
                dispatch(startRegsiterAdmin(values, resetForm, redirect))
            }
        },
        validationSchema
    })

    const handleClick = () => {
        props.history.push('/')
    }

    return (
        <div className="container">
            { role === 'admin' ? (
                <Heading
                    className="my-4"
                    type="h2"
                    title="Edit Account"
                />
            ) : (
                <Heading
                    className="my-4"
                    type="h3"
                    title='Register here'
                />
            )}
            
            <form onSubmit={ handleSubmit }>
                <div className="row mb-3 ">
                    <div className="col-sm-4">
                        <Input
                            className="form-control"
                            type="text"
                            value={ values.username }
                            handleChange={ handleChange }
                            handleBlur={ handleBlur }
                            name="username"
                            placeholder="Enter username"
                        />
                        { touched.username && errors.username ? <div className="form-text">{ errors.username }</div> : null }
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
                {
                    role !== 'admin' && (
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
                    )
                }

                <div className="row mb-3 ">
                    <div className="col-sm-4">
                        <Input
                            className="form-control"
                            type="text"
                            value={ values.academy.name }
                            handleChange={ handleChange }
                            handleBlur={ handleBlur }
                            name="academy.name"
                            placeholder="Enter academy name"
                        />
                        { Object.keys(touched).includes('academy') && Object.keys(errors).includes('academy')? <div className="form-text">{ errors.academy.name }</div> : null  }
                    </div>
                </div>

                <Input
                    className="btn btn-outline-primary mt-3 me-4"
                    type="submit"
                    value={`${role !== 'admin' ? 'Register' : 'Save'}`}
                />

                {
                    role !== 'admin' && (
                        <Button
                            type="button"
                            className="btn btn-outline-secondary mt-3"
                            handleClick={ handleClick }
                            value="Cancel"
                        />
                    )
                }
            </form>
            { serverError.register && <div className="text-danger my-4">{ serverError.register }</div> }
        </div>
    )
}

export default Register