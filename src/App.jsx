import { Header } from "./Header";
import { PostPages } from "./PostPages";
import { Footer } from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <PostPages />
      </div>
      <Footer />
    </div>
  );
}

export default App;
