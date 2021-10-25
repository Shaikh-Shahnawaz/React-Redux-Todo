import React from 'react'
import { Link } from "react-router-dom";
import '../CSS/Header.css'
function Home() {
    return (
        <div>
            <div class="container jumbotron bg-light  mt-5 p-3 text-center">

                <h1 class="display-5 ">React To-Do List</h1>
               
                <hr class="my-4" />
                <p>React-Redux Todo app with Add, Remove, Edit, Check & Uncheck and Search Functionality.</p>
                <p class="lead">
                   
                    <button className="btn btn-outline-dark me-3"> <Link style={{color:'black'}} to="/login">Login Here</Link></button>
                   
                    <button className="btn btn-dark"> <Link style={{color:'white'}} to="/todo">To-Do Here</Link></button>
                   
                </p>
            </div>
        </div>
    )
}

export default Home
