const initState = {
    projects: [
        {id: '1', title: 'Blog-1', content: 'blah blah blah'},
        {id: '2', title: 'Blog-2', content: 'blah blah blah'},
        {id: '3', title: 'Blog-3', content: 'blah blah blah'},
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type){
        case 'CREATE_PROJECT':
            console.log('created project', action.project )
            return state;
        case 'CREATE_PROJECT_ERR':
            console.log('create project error', action.err)
            return state;
        case 'DELETE_PROJECT':
            console.log('delete project');
            return state;
        case 'DELETE_PROJECT_ERROR':
            console.log('delete project error', 'state:',state, 'action:', action.project);
            return state;
        default:   
            return state
        }
    }

export default projectReducer