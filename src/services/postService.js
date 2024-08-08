import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

const getPosts = () => api.get("/posts");
const createPost = (post) => api.post("/posts/", post);
const updatePost = (id, post) => api.put(`/posts/${id}`, post);
const deletePost = (id) => api.get(`/posts/${id}`);

export { getPosts, createPost, updatePost, deletePost };
