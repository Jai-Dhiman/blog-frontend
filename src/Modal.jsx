import React, { useEffect } from "react";
import "./Modal.css";

export function Modal({ isVisible, onClose, children }) {
  useEffect(() => {
    if (isVisible) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    // Cleanup function to remove the class when component unmounts
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="modal-background">
      <div className="modal-main">
        <button className="close" onClick={onClose}>
          &times;
        </button>
        {children}
        {/* <button className="delete" onClick={onDelete}>
          Delete Post
        </button> */}
      </div>
    </div>
  );
}
