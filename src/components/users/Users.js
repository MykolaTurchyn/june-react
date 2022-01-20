import {useEffect, useState} from "react";
import {getUsers} from "../../services/user.api";
import User from "../user/User";

export default function Users() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(({data}) => {
            console.log(data);
            setUsers([...data])
        })
    }, [])
    return (
        <div>
            {
                users.map((data) => <User user={data} key={data.id}/>)
            }
        </div>
    );
}