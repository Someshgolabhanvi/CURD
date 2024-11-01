import axios from 'axios';

const api = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com"
});

//get method

export const getPost = () =>{
    return api.get("/posts");
}
//Delete Method
export const deletePost = (id) =>{
    return api.delete(`/posts/${id}`)
}

//Post Method

export const postData = (post) =>{
    return api.post("/posts",post);
}

export const updateData = (id,post) =>{
    return api.put(`/posts/${id}`,post)
}