import React, { useState } from "react";

export function PostNew(props) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const postData = {
      title: title,
      body: body,
      image: image,
    };
    props.onCreatePost(postData);
    // Clear the form
    setTitle("");
    setBody("");
    setImage("");
  };

  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title: </label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="body">Body: </label>
          <textarea id="body" value={body} onChange={(e) => setBody(e.target.value)} required></textarea>
        </div>
        <div>
          <label htmlFor="image">Image URL: </label>
          <input type="url" id="image" value={image} onChange={(e) => setImage(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
