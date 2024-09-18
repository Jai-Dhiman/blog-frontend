export function PostIndex(props) {
  console.log(props);

  return (
    <div id="posts-index">
      <h1>All posts</h1>
      <div className="container">
        {props.posts.map((post) => (
          <div key={post.id} className="post-card">
            <img src={post.image} alt={post.title} />
            <h2>{post.title}</h2>
            <div className="body">{post.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
