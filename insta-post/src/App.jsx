import React from "react";
import "./App.css";
import Post from "./components/post";

function App() {
  return (
    <div className="posts">
      <h1>Mini Image Feed</h1>

      <Post
        image="https://picsum.photos/400/300?random=1"
        name="vanitha"
      />

      <Post
        image="https://picsum.photos/400/300?random=2"
        name="nikitha"
      />

      <Post
        image="https://picsum.photos/400/300?random=3"
        name="vaishnavi"
      />
    </div>
  );
}

export default App;