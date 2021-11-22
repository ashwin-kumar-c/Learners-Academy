import React from 'react'
import { Link, Route } from 'react-router-dom'
import Heading from './reusables/Heading'

const NavBar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-warning">
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
                                <li><Link className="dropdown-item" to="/admin/register"> Register </Link></li>
                                <li><Link className="dropdown-item" to="/admin/login"> Login </Link></li>
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
        
    )
}

export default NavBar