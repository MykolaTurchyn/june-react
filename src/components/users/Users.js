import {useEffect, useState} from "react";
import {getUsers} from "../services/user.axios";
import User from "../user/User";
import  './Users.css'
import {getPostOfUser} from "../services/post.axios";
export default function Users() {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(({data}) => setUsers([...data]))
    }, [])
    return (
        <div className={'div-box'}>
            <div className={"user-box"}>
                {
                    users.map(user => <User key={user.id} user={user}/>)
                }
            </div>

            <div className={"user-info"}></div>
        </div>
    );
}