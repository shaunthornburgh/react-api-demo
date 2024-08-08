import React, { useState } from "react";
import { createPost } from "../services/postService";

export default function PostForm({ posts, setPosts }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addPost();
    setTitle("");
    setBody("");
  };

  const addPost = () => {
    createPost({ title, body })
      .then((response) => {
        setPosts([...posts, response.data]);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>Title</div>
      <input
        value={title}
        type="text"
        onChange={(e) => setTitle(e.target.value)}
      />
      <div>Body</div>
      <textarea value={body} onChange={(e) => setBody(e.target.value)} />
      <div>
        <button type="submit">Add post</button>
      </div>
    </form>
  );
}
