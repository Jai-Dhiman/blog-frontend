export function PostNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <div>
        <label htmlFor="title">Title: </label>
        <input type="text" id="body" name="body" required />
      </div>
      <div>
        <label htmlFor="body">Body: </label>
        <textarea type="body" id="body" name="body" required></textarea>
      </div>
      <div>
        <label htmlFor="image">Image URL: </label>
        <input type="url" id="image" name="image" />
      </div>
      <button type="submit">Submit</button>
    </div>
  );
}
