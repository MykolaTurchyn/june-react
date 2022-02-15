import {useEffect, useReducer} from "react";
import {reducerOfUsersAndPosts} from "./reducers/reducer";
import {getPosts, getUsers} from "./services/users.axios.api";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";

export default function App() {
    const [{users, posts}, dispatch] = useReducer(reducerOfUsersAndPosts, {users: [], posts: []});

    useEffect(async () => {
        const users = await getUsers();
        const posts = await getPosts();
        dispatch({type: 'GET_USERS', payload: users})
        dispatch({type: 'GET_POSTS', payload: posts})
    }, [])
    return (
        <div>
            <div>USERS</div>
            <Users users={users}/>
            <div>POSTS</div>
            <Posts posts={posts}/>
        </div>
    );
}