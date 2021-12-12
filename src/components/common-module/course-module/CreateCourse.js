import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Textarea from '../../reusables/Textarea'
import { Form } from 'react-bootstrap'
import Input from '../../reusables/Input'

const CreateCourse = (props) => {

    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        description: Yup.string().required('Required'),
        duration: Yup.number().required('Required'),
        category: Yup.string().required('Required'),
        validity: Yup.string().required('Required'),
        // level: Yup.string().required('Required'),
        author: Yup.string().required('Required')
    })

    const { handleChange, handleBlur, handleSubmit, values, touched, errors } = useFormik({
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
            console.log('course', values)
        },
        validationSchema   
    })

    const courseCategory = ['HTML', 'CSS', 'Javascript', 'ReactJS', 'NodeJS', 'ExpressJS', 'MangoDB']
    const courseLevel = ['Beginner', 'Intermediate', 'Expert']

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
                            placeholder="Enter Course Name"
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
                            name="description"
                            placeholder="Brief description about course"
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
                            placeholder="Course Duration"
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
                            <option value="">Select Course Category</option>
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
                            type="text"       
                            value={ values.validity }
                            handleChange={ handleChange }
                            handleBlur={ handleBlur }
                            name="validity"
                            placeholder="Course Validity"
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
                            <option value="">Select Course Level</option>
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
                            placeholder="Course Author"
                        />
                        { touched.author && errors.author ? <div className="form-text">{ errors.author }</div> : null }
                    </div>
                </div>      

                <Input
                    className="btn btn-outline-primary mt-3 me-4"
                    type="submit"
                    value="Save"
                />    
            </form>
        </div> 
    )
}

export default CreateCourse