import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import Textarea from '../../reusables/Textarea'
import Input from '../../reusables/Input'
import { startCreateCourse } from '../../../actions/adminActions'

const CreateCourse = (props) => {
    const { handleClose } = props

    const dispatch = useDispatch()

    const serverError = useSelector((state) => {
        return state.admin.errors
    })

    const courseCategory = ['HTML', 'CSS', 'javascript', 'reactjs', 'nodejs','expressjs', 'mongodb']
    const courseLevel = ['beginner', 'intermediate', 'expert']


    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        description: Yup.string().required('Required'),
        duration: Yup.number().required('Required'),
        category: Yup.string().required('Required'),
        validity: Yup.string().required('Required'),
        level: Yup.string().required('Required'),
        author: Yup.string().required('Required')
    })

    const { handleChange, handleBlur, handleSubmit, values, setValues, touched, errors } = useFormik({
        initialValues: {
            name: '',
            description: '',
            duration: '',
            releaseDate: '',   
            category: '',
            validity: '',
            level: '',
            author: ''
        },
        onSubmit: (values, { resetForm }) => {
            const closeModal = () => {
                handleClose()
            }
            dispatch(startCreateCourse(values, resetForm, closeModal))
            
        },
        validationSchema   
    })

    const handleDateChange = (date) => {
        setValues({...values, releaseDate: date})
    }  

    return (
        <div className="container">
            <form onSubmit={ handleSubmit }>
                <div className="row mb-3 ">
                    <div className="col-sm-6">
                        <Input
                            className="form-control"
                            type="text"
                            value={ values.name }
                            handleChange={ handleChange }
                            handleBlur={ handleBlur }
                            name="name"
                            placeholder="Enter Course Name *"
                        />
                        { touched.name && errors.name ? <div className="form-text">{ errors.name }</div> : null }
                    </div>
                </div>

                <div className="row mb-3 ">
                    <div className="col-sm-6">
                        <Textarea
                            className="form-control"
                            value={ values.description }
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            name="description"
                            placeholder="Brief description about course *"
                        />
                        { touched.description && errors.description ? <div className="form-text">{ errors.description }</div> : null }
                    </div>
                </div>

                <div className="row mb-3 ">
                    <div className="col-sm-6">
                        <Input
                            className="form-control"
                            type="number"       
                            value={ values.duration }
                            handleChange={ handleChange }
                            handleBlur={ handleBlur }
                            name="duration"
                            placeholder="Course Duration *"
                        />
                        { touched.duration && errors.duration ? <div className="form-text">{ errors.duration }</div> : null }
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-6">
                        <select
                            className="form-select"
                            value={ values.category }
                            onChange={ handleChange }
                            onBlur={ handleBlur }
                            name="category"
                        >
                            <option value="">Select Course Category *</option>
                            { courseCategory.map((course, i) => {
                                return (
                                    <option key={i} value={course}>{ course }</option>
                                )
                            }) }
                        </select>
                        { touched.category && errors.category ? <div className="form-text">{ errors.category }</div> : null }
                    </div>
                </div>

                <div className="row mb-3 ">
                    <div className="col-sm-6">
                        <Input
                            className="form-control"
                            type="number"       
                            value={ values.validity }
                            handleChange={ handleChange }
                            handleBlur={ handleBlur }
                            name="validity"
                            placeholder="Course Validity *"
                        />
                        { touched.validity && errors.validity ? <div className="form-text">{ errors.validity }</div> : null }
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-6">
                        <select
                            className="form-select"
                            value={ values.level }
                            onChange={ handleChange }
                            onBlur={ handleBlur }
                            name="level"
                        >
                            <option value="">Select Course Level *</option>
                            { courseLevel.map((lvl, i) => {
                                return (
                                    <option key={i} value={lvl}>{ lvl }</option>
                                )
                            }) }
                        </select>
                        { touched.level && errors.level ? <div className="form-text">{ errors.level }</div> : null }
                    </div>
                </div>  

                <div className="row mb-3 ">
                    <div className="col-sm-6">
                        <Input
                            className="form-control"
                            type="text"       
                            value={ values.author }
                            handleChange={ handleChange }
                            handleBlur={ handleBlur }
                            name="author"
                            placeholder="Course Author *"
                        />
                        { touched.author && errors.author ? <div className="form-text">{ errors.author }</div> : null }
                    </div>
                </div>   

                <div>
                    <DatePicker 
                        selected={ values.releaseDate } 
                        onChange={ handleDateChange }
                        dateFormat="dd/MM/yyyy"
                        minDate={ new Date() }
                        placeholderText="  Pick release date"
                    />
                </div>   

                <Input
                    className="btn btn-outline-primary mt-3 me-4"
                    type="submit"
                    value="Save"
                />    
                { serverError.createCourseError && <div className="text-danger mt-5">{ serverError.createCourseError }</div> }
            </form>
            
        </div> 
    )
}

export default CreateCourse