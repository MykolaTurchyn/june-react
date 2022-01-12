import {useEffect, useState} from "react";
import {getPostOfUser} from "../services/post.axios";
import Post from "../post/Post";


export default function User({
                                 user: {
                                     id,
                                     username,
                                     name,
                                     email,
                                     address: {city, street, suite, zipcode},
                                     phone,
                                     website,
                                     company: {name: companyName, bs, catchPhrase}
                                 }
                             }) {

    let [addressToggle, setAddressToggle] = useState(false);
    let [companyToggle, setCompanyToggle] = useState(false);
    let [userToggle, setUserToggle] = useState(null);
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getPostOfUser(id).then(({data}) => setPosts([...data]))
    }, [])

    return (
        <div>
            <div>
                <button onClick={() => setUserToggle(!userToggle)}>
                    {userToggle ? 'Hide' : 'User ' + id}
                </button>
            </div>
            <div>
                {
                    userToggle && <ul>
                        <li>User №{id}</li>
                        <li>Username: {username}</li>
                        <li>Name: {name}</li>
                        <li>Email: {email}</li>
                        <li>Address:
                            <button onClick={() => setAddressToggle(!addressToggle)}> More </button>
                            {
                                addressToggle && <ul>
                                    <li>City: {city}</li>
                                    <li>Street: {street}</li>
                                    <li>Suite: {suite}</li>
                                    <li>ZipCode: {zipcode}</li>
                                </ul>
                            }
                        </li>
                        <li>Phone: {phone}</li>
                        <li>Website: {website}</li>
                        <li>Company:
                            <button onClick={() => setCompanyToggle(!companyToggle)}> More</button>
                            {
                                companyToggle && <ul>
                                    <li>Company Name: {companyName}</li>
                                    <li>Catch Phrase: {catchPhrase}</li>
                                    <li>BS: {bs}</li>
                                </ul>
                            }
                        </li>
                    </ul>
                }
                {posts.map(post => <Post key={post.id} post={post}/>)}


            </div>
        </div>
    );
}