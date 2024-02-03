import React from 'react';
import "../css/style-sheet.css"
import { useState } from "react"
import logo1 from "../images/Travellin_agency__1_-removebg-preview.png"
import logo2 from "../images/Travellin_agency-removebg-preview (1).png"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
const NavBar = () => {

    const [color, setColor] = useState()
    const colorOne = {
        backgroundColor: "white",
        color: "black"
    }
    const colorTwo = {
        backgroundColor: "#bc519b",
        color: "white"
    }
    const [logo, setLogo] = useState()
    window.addEventListener('scroll', () => {
        var header = document.getElementById('Nav');
        var scrollPosition = document.documentElement.scrollTop;
        if (scrollPosition > 0) {
            header.style.backgroundColor = '#bc519b'
            setColor(colorOne)
            setLogo(logo1)
        } else {
            header.style.backgroundColor = 'white'
            setColor(colorTwo)
            setLogo(logo2)
        }
    })
    return (
        <nav className="navbar navbar-expand-lg bg-body-transparent " id="Nav">
            <a className="navbar-brand" href="#"><img id="img" src={logo} style={{ maxHeight: "50px" }} /></a>
            <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                style={{ position: "absolute", right: "5px", top: "15px" }} aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>

                    <li className="nav-item dropdown" style={{ position: "relative" }}>
                        <a className="nav-link text-dark dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Cateories
                        </a>
                        <ul className="dropdown-menu" style={{ position: "absolute" }}>
                            <li><a className="dropdown-item" href="#">decpration</a></li>
                            <li><a className="dropdown-item" href="#">Special Gifts</a></li>
                            <li><a className="dropdown-item" href="#">Shoes</a></li>
                            <li><a className="dropdown-item" href="#">Shirts</a></li>
                            <li><a className="dropdown-item" href="#">Names</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#">About Us</a>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput" style={{ fontSize: "14px" }}>Email address/Username</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword" style={{ fontSize: "14px" }}>Password</label>
                    </div>
                    <button id="login" style={color} className='btn' type="submit">login</button>
                </form>
            </div>
        </nav>
    )
}
export default NavBar