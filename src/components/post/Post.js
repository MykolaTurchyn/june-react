import {useState} from "react";

export default function Post({post: {id, userId, title, body}}) {
    let [postToggle, setPostToggle] = useState(null);

    return (
        <div>
                <button onClick={() => setPostToggle(!postToggle)}>
                    {postToggle ? 'Hide' : 'Post ' + id + ' of User ' + userId}
                </button>
            {
                postToggle && <ul>
                    <li>Post of User {userId}</li>
                    <li>Post number:{id}</li>
                    <li>:Title: {title}</li>
                    <li>:Body: {body}</li>
                </ul>
            }
        </div>
    );
}