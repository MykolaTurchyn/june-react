import {getUsers} from "../services/User-Service";
import {useEffect, useState} from "react";
import User from "../user/User";
import Posts from "../posts/Posts";

export default function Users() {
let [users,setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(({data}) => {
            console.log(data)
            setUsers([...data])})
    }, []);

    return (
        <div>
            {
                users.map(user => <User user={user} key={user.id}/>)
            }
            <Posts/>
        </div>
    );
}