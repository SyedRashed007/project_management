import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createProject} from '../../store/actions/ProjectActions'
import {Redirect} from 'react-router-dom'
class CreateProject extends Component {

    state={
        title: '',
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state)
        if(this.state.title && this.state.content){
            this.props.createProject(this.state) 
            this.props.history.push('/');
        } else {
            alert('Enter your title and content')
        }
    }


    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin'/>
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h4 className="grey-text text-darken-3">Create New Project</h4>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn black lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDisptachToProps = (dispatch) => {
    return{
        createProject: (project) => dispatch(createProject(project))
    }
}


export default connect(mapStateToProps, mapDisptachToProps)(CreateProject)
