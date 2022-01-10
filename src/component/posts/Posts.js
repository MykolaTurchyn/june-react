import {useEffect, useState} from "react";
import {getPosts} from "../services/Post-Service";
import Post from "../post/Post";

export default function Posts() {
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts().then(({data}) => setPosts([...data]))
    }, [])
    return (
        <div>
            {
                posts.map(post => <Post key={post.id} post={post}/> )
            }

        </div>
    );
}