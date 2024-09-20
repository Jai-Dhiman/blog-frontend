export function PostShow({ currentPost }) {
  return (
    <div>
      <h2>Title: {currentPost.title}</h2>
      <p>Body: {currentPost.body}</p>
      {currentPost.image && (
        <p>
          Image: <img src={currentPost.image} />
        </p>
      )}
    </div>
  );
}
