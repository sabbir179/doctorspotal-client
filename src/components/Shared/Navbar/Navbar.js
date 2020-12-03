import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light ">
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                
                    <NavLink to="/" activeStyle={{fontWeight: "bold", color: "black"}} class="nav-link mr-5" >Home <span class="sr-only">(current)</span></NavLink>
                </li>
                <li className="nav-item">
                        <NavLink className="nav-link mr-5" to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link mr-5" to="/dashboard">Dashboard</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link mr-5 text-white" to="/dashboard">Admin</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link mr-5 text-white" to="#">Blogs</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link mr-5 text-white" to="#">Contact Us</NavLink>
                    </li>
                
                
                </ul>
                
            </div>
        </nav>
    );
};

export default Navbar;