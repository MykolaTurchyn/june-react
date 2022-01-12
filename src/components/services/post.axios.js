import axios from 'axios';

let url = {
    baseURL: "https://jsonplaceholder.typicode.com"
}
let axiosInstance = axios.create(url);

const getPosts = ( ) => {
  return axiosInstance.get("/posts")
}

const getPostOfUser = (id) => {
  return axiosInstance.get("/users/"+id+"/posts")
}

export {getPosts,getPostOfUser}