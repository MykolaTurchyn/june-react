import axios from 'axios';

let url = {
    baseURL: "https://jsonplaceholder.typicode.com"
}
let axiosInstance = axios.create(url);
const getUsers = () => {
    return axiosInstance.get('/users')
        .then(value => value.data)
}
const getPosts = () => {
    return axiosInstance.get('/posts')
        .then(value => value.data)
}  


export {getUsers,getPosts};