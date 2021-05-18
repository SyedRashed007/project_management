const initState = {
    projects: [
        {id: '1', title: 'Blog-1', content: 'blah blah blah'},
        {id: '2', title: 'Blog-2', content: 'blah blah blah'},
        {id: '3', title: 'Blog-3', content: 'blah blah blah'},
    ]
}

const projectReducer = (state = initState, action) => {
    return state
}

export default projectReducer