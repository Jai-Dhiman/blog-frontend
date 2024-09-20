export function PostShow({ post }) {
  return (
    <div>
      <h2>{post?.title || "N/A"}</h2>
      <p>{post?.body || "N/A"}</p>
      {post?.image && (
        <p>
          <img src={post.image} alt={post.title} style={{ maxWidth: "50%" }} />
        </p>
      )}
    </div>
  );
}
