import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect, getFirebase } from 'react-redux-firebase'
import { compose } from 'redux'
import {Redirect} from 'react-router-dom'
import moment from 'moment' 
import '../../index.css'



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

    if (!auth.uid) return <Redirect to='/'/>
    if (project) {
        return(
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card medium" style={{ overflow: "scroll", width: '100%'}}>
                        <span className="card-title" style={{ display: "flex", justifyContent: "center", fontWeight: "bold"}}>{project.title}</span>
                        <p style={{ display: "flex", justifyContent: "center", fontSize: "larger", textTransform: "capitalize"}}>{project.content}</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
                        <div>{moment(project.createdAt.toDate()).calendar()}</div>
                        <button className='fa' onClick={handleDelete} style={{ cursor: 'pointer'}}>Delete</button>
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

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projcts', orderBy: [["title", "desc"]]}
    ])
)(ProjectDetails)
