import React, { useEffect } from 'react'
import { Link, Route, withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import swal from 'sweetalert'
import Heading from './reusables/Heading'
import Home from './components/Home'
import Register from './components/admin/Register'
import Login from './components/admin/Login'
import Dashboard from './components/admin/Dashboard'
import Account from './components/admin/Account'
import { startGetAdmin,setAdmin } from './actions/adminActions'

const NavBar = (props) => {

    const dispatch = useDispatch()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token) {
            dispatch(startGetAdmin(token))
        }
    }, [])

    const data = useSelector((state) => {
        return state.admin.data
    })

    const handleLogout = () => {
        localStorage.removeItem('token')
        swal({
            title: 'Successfully logged out',
            button: 'Cancel'
        })
        dispatch(setAdmin({}))
        props.history.push('/')
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
                                    { Object.keys(data).length > 0 ? (
                                        <>
                                            <li>
                                                <Link className="dropdown-item" to="/admin/account"> Account</Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="/dashboard"> Dashboard</Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="#" onClick={handleLogout}> Logout </Link>
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
                                    <li><Link className="dropdown-item" to="/student/sign-in"> Sign In </Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Route path="/" component={Home} exact />
            <Route path="/admin/register" component={Register} />
            <Route path="/admin/login" component={Login} />
            <Route path="/admin/account" component={Account}/>
            <Route path="/dashboard" component={Dashboard} />
        </div>
        
    )
}

export default withRouter(NavBar)
