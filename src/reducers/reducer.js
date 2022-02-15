const reducerOfUsersAndPosts = (state, action) => {
    switch (action.type) {
        case 'GET_USERS':
            const users = action.payload;
            return {...state, users: users}
        case 'GET_POSTS':
            const posts = action.payload;
            return {...state, posts: posts}
        default:
            return {...this.state}
    }
}

export {reducerOfUsersAndPosts}