import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect, getFirebase } from 'react-redux-firebase'
import { compose } from 'redux'
import {Redirect} from 'react-router-dom'
import moment from 'moment' 
// import {deleteProject} from '../../store/actions/ProjectActions'



const  ProjectDetails = (props) => {
    

    const {auth, project} = props;
    // console.log(props.match.params.id)

    const handleDelete = () => {
        const firestore = getFirebase().firestore()
        firestore.collection('projects').doc(props.match.params.id).delete().then(()=> {
                console.log('Delete success')
                window.location = '/'
        }).catch((err) => {
            console.log('Error delete' , err)
        })
        
    }

    if (!auth.uid) return <Redirect to='/signin'/>
    if (project) {
        return(
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card medium" style={{ overflow: "scroll", width: '100%'}}>
                        <span className="card-title">{project.title}</span>
                        <p>{project.content}</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
                        <div>{moment(project.createdAt.toDate()).calendar()}</div>
                        <button className='material-icons' onClick={handleDelete} style={{ cursor: 'pointer'}}>delete</button>
                    </div>
                </div>
            </div>
        )
    } else {
        return(
            <div className="container center">
                <p>Click on Manage Projects...</p>
                <Redirect to ='/'/>
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    // console.log(state);
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;
    return {
        project: project,
        auth: state.firebase.auth,
        // id: id
    }
}

// const mapDisptachToProps = dispatch => {
//     return {
//         deleteProject: (id) => dispatch(deleteProject(id))
//     }
// }

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projcts', orderBy: [["title", "desc"]]}
    ])
)(ProjectDetails)
