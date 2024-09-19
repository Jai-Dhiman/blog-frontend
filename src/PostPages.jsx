import { PostIndex } from "./PostIndex";
import { PostNew } from "./PostNew";
import axios from "axios";
import { useState, useEffect } from "react";

export function PostPages() {
  const [posts, setPosts] = useState([]);

  const handleIndex = () => {
    axios
      .get("http://localhost:3000/posts.json")
      .then((response) => {
        console.log(response.data);
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching posts:", error);
      });
  };

  useEffect(handleIndex, []);
  return (
    <div>
      <PostNew />
      <PostIndex posts={posts} />
    </div>
  );
}
