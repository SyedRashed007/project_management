import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import '../layout/style.css'
import { connect } from 'react-redux'
import {isLoaded} from 'react-redux-firebase'


const Navbar = (props) => {

    const { auth, profile } = props;
    // console.log(auth)

   const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks/>

    return(
        <nav className="nav-wrapper black darken-3">
            <div className="container">
                <Link to='/' className="logo left"><b>Project Planner</b></Link>
                { isLoaded(auth)&&links }
            </div>
        </nav>
    )
}


const mapStateToProps = (state) => {
    // console.log(state);
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar)