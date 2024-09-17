function App() {
  return (
    <div>
      <header>
        <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
      </header>

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

      <div id="posts-index">
        <h1>All posts</h1>
        <div className="post">
          <h2>Fake Data 1</h2>
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcoderethinked.com%2Fwp-content%2Fuploads%2F2022%2F04%2Ffake-data.jpg&f=1&nofb=1&ipt=d925d3e7962dcb4818cb46d03cdee6a54cb23af46f93f85aca716417747abb5d&ipo=images" />
          <p>Here is some text of fake data</p>
        </div>
        <div className="post">
          <h2>Fake Data 2</h2>
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.standard.co.uk%2Fs3fs-public%2Fthumbnails%2Fimage%2F2018%2F04%2F27%2F12%2F27-04-fake-data.jpg&f=1&nofb=1&ipt=99772f2234329c5f9e9757be826320e906547dc915738b5c88114e09b35bacca&ipo=images" />
          <p>Here is some text of fake data</p>
        </div>
        <div className="post">
          <h2>Fake Data 3</h2>
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdontpaniclabs.com%2Fwp-content%2Fuploads%2F2018%2F07%2Fgood-fake-data.jpg&f=1&nofb=1&ipt=aeb3409c7b2a2165f05e9ff833260e1331f62bf9dd161b1ce69e13b8cadeaca9&ipo=images" />
          <p>Here is some text of fake data</p>
        </div>
      </div>

      <footer>
        <p>Copyright 20XX</p>
      </footer>
    </div>
  );
}

export default App;
