import { PostIndex } from "./PostIndex";
import { PostNew } from "./PostNew";
import { PostShow } from "./PostShow";
import { Modal } from "./Modal";
import axios from "axios";
import { useState, useEffect } from "react";

export function PostPages() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

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

  const handleShow = (post) => {
    setCurrentPost(post);
    setIsPostsShowVisible(true);
  };

  const handleClose = () => {
    setIsPostsShowVisible(false);
  };

  useEffect(() => {
    handleIndex();
  }, []);

  return (
    <div>
      <PostNew />
      <PostIndex posts={posts} onShow={handleShow} />
      <Modal isVisible={isPostsShowVisible} onClose={handleClose}>
        <PostShow post={currentPost} />
      </Modal>
    </div>
  );
}
