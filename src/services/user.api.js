import axios from "axios";

let url = {
    baseURL: "http://localhost:8080"
    // baseURL: "https://jsonplaceholder.typicode.com"
}
let axiosInstance = axios.create(url);

const saveUser = (user) => {
    return axiosInstance.post('/users', {
        username: user.username,
        name: user.name,
        surname: user.surname,
        age: user.age,
        email: user.email
    });
}

const getUsers = () => {
    return axiosInstance.get('/users');
}
const deleteUser = (id) => {
    return axiosInstance.delete('/users/' + id);
}


export {saveUser, getUsers, deleteUser}
