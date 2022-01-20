import {deleteUser} from "../../services/user.api";

export default function User({user}) {
    return (
        <div>
            ID: {user.id}<br/>
            Username: {user.username}<br/>
            Name: {user.name}<br/>
            Surname: {user.surname}<br/>
            Age: {user.age}<br/>
            Email: {user.email}<br/>

            <button onClick={() => {
                deleteUser(user.id)
            }}>delete
            </button>


        </div>
    );
}