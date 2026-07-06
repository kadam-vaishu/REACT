import React, { useState } from "react";

const Post = (props) => {
  const [likes, setLikes] = useState(0);

  const handleLikes = () => {
    setLikes(likes + 1);
    console.log(likes + 1);
  };

  return (
    <div className="post-card">
      <img src={props.image} alt={props.name} />

      <p>{props.name}</p>

      <button onClick={handleLikes}>
       🩷 Likes {likes}
      </button>
    </div>
  );
};

export default Post;