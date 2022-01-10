import axios from 'axios';

let url = {
    baseURL: "https://jsonplaceholder.typicode.com/"
}
let axiosInstance = axios.create(url);

const getUsers = () => {
    return axiosInstance.get("/users")
}
const getUser = (id) => {
    return axiosInstance.get("/users/")
}


export {getUsers, getUser};