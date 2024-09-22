import { PostIndex } from "./PostIndex";
import { PostNew } from "./PostNew";
import { PostShow } from "./PostShow";
import { PostDestroy } from "./PostDestroy";
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

  const handleCreate = (params) => {
    // console.log("handling create");
    axios.post("http://localhost:3000/posts.json", params).then((response) => {
      // console.log(response.data);
      setPosts([...posts, response.data]);
    });
  };

  const handleDestroy = (post) => {
    console.log("handling destroy");
    axios.delete("http://localhost:3000/posts/11.json", post).then(function (response) {
      console.log("post deleted");
    });
  };

  const handleClose = () => {
    setIsPostsShowVisible(false);
  };

  useEffect(() => {
    handleIndex();
  }, []);

  return (
    <div>
      <PostNew onCreate={handleCreate} />
      <PostIndex posts={posts} onShow={handleShow} />
      <Modal isVisible={isPostsShowVisible} onClose={handleClose}>
        <PostShow post={currentPost} />
        <PostDestroy onDelete={handleDestroy} />
      </Modal>
    </div>
  );
}
