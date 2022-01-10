import {useEffect, useState} from "react";
import {getUsers} from "../services/user.axios";

export default function Users() {

    let [users, setUsers] = useState([]);

   useEffect(() => {
       getUsers().
   },[])
    return (
        <div>
            {users || JSON}
        </div>
    );
}