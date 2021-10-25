import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import '../CSS/Header.css'

//Redux
import { useDispatch, useSelector } from 'react-redux'
import { getHeaderSearchData, getLogoutRoute } from '../reducers/reducer'


function Header() {

    const dispatch = useDispatch()

    const history=useHistory();
    const stateLoggedIn = useSelector(state => state.todo)


    function logout(){

        localStorage.removeItem("token")
        dispatch(getLogoutRoute())
        history.push('/login')
        
    }


    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand text-primary" href="#">To-Do App</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                            <li class="nav-item">
                                <a class="nav-link " href="#"> <Link to="/">Home</Link></a>
                            </li>

                            <li class="nav-item">
                            <a class="nav-link " href="#">
                                {
                                    stateLoggedIn.loggedIn ?  <span style={{color:'black'}} onClick={logout}>Logout</span>: <Link to="/login">Login</Link>
                                }
                                 </a>
                                {/* <a class="nav-link " href="#"><Link to="/login">Login</Link></a> */}

                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#"><Link to="/todo">To-Do</Link></a>
                            </li>


                        </ul>
                        <div class="d-flex">

                            <input class="form-control me-2" type="text" placeholder="Search" />
                            <button class="btn btn-warning me-2" type="submit">Search</button>
                        
                        </div>

                    </div>
                </div>
            </nav>


        </>
    )
}

export default Header
