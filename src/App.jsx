function App() {
  return (
    <div>
      <Header />
      <PostPages />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
    </header>
  );
}

function PostPages() {
  let posts = [
    {
      id: 1,
      title: "Title1",
      body: "Body1",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcoderethinked.com%2Fwp-content%2Fuploads%2F2022%2F04%2Ffake-data.jpg&f=1&nofb=1&ipt=d925d3e7962dcb4818cb46d03cdee6a54cb23af46f93f85aca716417747abb5d&ipo=images",
    },
    {
      id: 2,
      title: "Title2",
      body: "Body2",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.standard.co.uk%2Fs3fs-public%2Fthumbnails%2Fimage%2F2018%2F04%2F27%2F12%2F27-04-fake-data.jpg&f=1&nofb=1&ipt=99772f2234329c5f9e9757be826320e906547dc915738b5c88114e09b35bacca&ipo=images",
    },
    {
      id: 3,
      title: "Title3",
      body: "Body3",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdontpaniclabs.com%2Fwp-content%2Fuploads%2F2018%2F07%2Fgood-fake-data.jpg&f=1&nofb=1&ipt=aeb3409c7b2a2165f05e9ff833260e1331f62bf9dd161b1ce69e13b8cadeaca9&ipo=images",
    },
  ];

  return (
    <div>
      <PostNew />
      <PostIndex posts={posts} />
    </div>
  );
}

function PostNew() {
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

function PostIndex(props) {
  console.log(props);

  return (
    <div id="posts-index">
      <h1>All posts</h1>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>Copyright 2024</p>
    </footer>
  );
}

export default App;
