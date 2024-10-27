import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header id="ed_header_wrapper">

            <div className="ed_header_top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <p>welcome to our new session of education</p>
                            <div className="ed_info_wrapper">
                                <Link to="javascript:void(0);" id="login_button">
                                    Login
                                </Link>
                                <div id="login_one" className="ed_login_form">
                                    <h3>log in</h3>
                                    <form className="form row m-0">
                                        <div className="form-group">
                                            <label className="control-label">Email :</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label">Password :</label>
                                            <input type="password" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <button type="submit">login</button>
                                            <Link to="signup.html">registration</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ed_header_bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-2 col-lg-3 col-md-3 col-sm-12 col-12">
                            <div className="educo_logo">
                                <Link to="/">
                                    <img src="assets/images/header/logo1.png" alt="logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-2 col-md-1 col-sm-12 col-12">
                            <div className="main-menu-container">
                                <div className="main-menu">
                                    <ul>
                                        <li>
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="about">about us</Link>
                                        </li>

                                        <li>
                                            <Link to="events">events</Link>
                                        </li>
                                        <li>
                                            <Link to="courses">courses</Link>
                                        </li>
                                        <li>
                                            <Link to="teachers">Teachers</Link>
                                        </li>
                                        <li>
                                            <Link to="notice">Notice Board</Link>
                                        </li>
                                        <li>
                                            <Link to="contact">Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-7 col-md-8 col-sm-12 col-12">
                            <div className="educo_call edu-info-menu">
                                <Link to="javascript:void(0);">
                                    <i className="fa fa-phone"></i> 01988-674940
                                </Link>
                                <div className="menu-btn-wrap">
                                    <Link to="javascript:void(0);" className="menu-btn">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}
