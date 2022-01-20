import './Form.css'
import {useState} from "react";
import {saveUser} from "../../services/user.api";

export default function Form() {
    let [change, setChange] = useState({
        username: "",
        name: "",
        surname: "",
        age: 0,
        email: ""
    });


    let onFormSubmit = (e) => {
        e.preventDefault()
        saveUser(change)
        console.log(change)
    };

    const onChange = (e) => {
        setChange({...change, [e.target.name]: e.target.value})
    }


    return (
        <div>
            <form action={"/user"} onSubmit={onFormSubmit}>
                <div className={'wrap'}>
                    <label>Username:</label>
                    <input type="text" name={"username"} value={change.username} onChange={onChange}/>
                    <label>Name:</label>
                    <input type="text" name={"name"} value={change.name} onChange={onChange}/>
                    <label>Surname:</label>
                    <input type="text" name={"surname"} value={change.surname} onChange={onChange}/>
                    <label>Age:</label>
                    <input type="number" name={"age"} value={ change.age} onChange={onChange}/>
                    <label>Email:</label>
                    <input type="email" name={"email"} value={change.email} onChange={onChange}/>
                    <input type="submit" value={"send"}/>
                </div>
            </form>

        </div>
    );
}