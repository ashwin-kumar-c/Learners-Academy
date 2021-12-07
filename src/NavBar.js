import React, { useEffect } from 'react'
import { Link, Route, withRouter, Switch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import swal from 'sweetalert'
import jwt_decode from 'jwt-decode'
import Heading from './components/reusables/Heading'
import Home from './components/Home'
import Register from './components/admin/Register'
import Login from './components/admin/Login'
import Students from './components/admin/Students'
import Account from './components/admin/Account'
import Dashboard from './components/admin/Dashboard'
import Courses from './components/Courses'
import StudentRegister from './components/admin/StudentRegister'
import NotFound from './components/NotFound'
import StudentAccount from './components/students/StudentAccount'
import StudentLogin from './components/students/StudentLogin'
import { startGetAdmin, setAdmin } from './actions/adminActions'
import { StartGetStudent, setStudent } from './actions/StudentActions'

const NavBar = (props) => {

    const dispatch = useDispatch()

    useEffect(() => {
        const token = localStorage.getItem('admin-token')
        if(token) {
            dispatch(startGetAdmin(token))
        }
    }, [])

    useEffect(() => {
        const token = localStorage.getItem('student-token')
        if(token) {
            const decoded = jwt_decode(token)
            dispatch(StartGetStudent(decoded._id, token))
        }
    }, [])

    const adminData = useSelector((state) => {
        return state.admin.adminData
    })

    const handleAdminLogout = () => {
        localStorage.removeItem('admin-token')
        swal({
            title: 'Successfully logged out',
            button: 'Cancel'
        })
        dispatch(setAdmin({}))
        props.history.push('/')
    }
    const handleStudentLogout = () => {
        localStorage.removeItem('student-token')
        swal({
            title: 'Successfully logged out',
            button: 'Cancel'
        })
        dispatch(setStudent({}))
        props.history.push('/')
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Heading
                        className="navbar-brand"
                        type="h1"
                        title="Learners Academy"
                    />
                    <button
                        type="button"
                        className="navbar-toggler"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarMenu"
                    >
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarMenu">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/"> Home </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link 
                                    className="nav-link dropdown-toggle" 
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    to="/admin"
                                > Admin </Link>
                                <ul className="dropdown-menu">
                                    { Object.keys(adminData).length > 0 ? (
                                        <>
                                            <li>
                                                <Link className="dropdown-item" to="/admin/account"> Account </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="/admin/students"> Students </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="/admin/courses"> Courses </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="/admin/dashboard"> Dashboard </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="#" onClick={handleAdminLogout}> Logout </Link>
                                            </li>
                                        </>
                                    ) : (
                                        <>
                                            <li>
                                                <Link className="dropdown-item" to="/admin/register"> Register </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="/admin/login"> Login </Link>
                                            </li>
                                        </>
                                    ) }
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link 
                                    className="nav-link dropdown-toggle" 
                                    role="button" 
                                    data-bs-toggle="dropdown" 
                                    to="/student"
                                > Student </Link>
                                <ul className="dropdown-menu">
                                    {!localStorage.getItem('student-token') ? (
                                        <li>
                                            <Link className="dropdown-item" to="/student/Login"> Login </Link>
                                        </li>
                                        
                                    ) : (
                                        <>
                                            <li>
                                                <Link className="dropdown-item" to="/student/account"> Account </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="/courses"> Courses </Link>
                                            </li>
                                            <li>

                                                <Link className="dropdown-item" to="#" onClick={ handleStudentLogout }>Logout </Link>
                                            </li>
                                        </>
                                        
                                    )}
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

             <Switch>                           
                <Route path="/" component={Home} exact />
                <Route path="/admin/register" component={Register} />
                <Route path="/admin/login" component={Login} />
                <Route path="/admin/account" component={Account} exact/>
                <Route path="/admin/students" component={Students} exact/>
                <Route path="/admin/students/register" component={ StudentRegister } />
                <Route path="/admin/dashboard" component={ Dashboard }/>
                <Route path="/courses" component={ Courses }/>
                <Route path="/student/login" component={ StudentLogin }/>
                <Route path="/student/account" component={ StudentAccount }/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </div>
    )
}

export default withRouter(NavBar)