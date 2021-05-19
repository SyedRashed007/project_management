import React from 'react'
import { NavLink } from 'react-router-dom'
import '../layout/style.css'
import {connect} from 'react-redux'
import {signOut} from '../../store/actions/AuthActions'

const SignedInLinks = (props) => {
    return(
        <div>
            <ul className="right">
                <li><NavLink to='/create'>New Project</NavLink></li>
                <li><button className='button' onClick={props.signOut}>Log Out</button></li>
                <li><NavLink to='/' className="btn btn-floating grey lighten-1">SR</NavLink></li>
            </ul>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)