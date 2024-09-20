import { PostIndex } from "./PostIndex";
import { PostNew } from "./PostNew";
import { Modal } from "./Modal";
import axios from "axios";
import { useState, useEffect } from "react";

export function PostPages() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);

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

  const handleShow = () => {
    setIsPostsShowVisible(true);
  };

  const handleClose = () => {
    setIsPostsShowVisible(false);
  };

  useEffect(handleIndex, []);
  return (
    <div>
      <PostNew />
      <PostIndex posts={posts} onShow={handleShow} />
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <p>TEST</p>
      </Modal>
    </div>
  );
}
