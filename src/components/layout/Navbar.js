import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import '../layout/style.css'


const Navbar = () => {
    return(
        <nav className="nav-wrapper black darken-3">
            <div className="container">
                <Link to='/' className="logo left"><b>Manage Projects</b></Link>
                <SignedInLinks/>
                <SignedOutLinks/>
            </div>
        </nav>
    )
}

export default Navbar