import React from "react";
import "./App.css";

const App = () => {
  // JavaScript Variables
  const yourName = "vaishnavi";
  const yourAim = "To Become a Successful Full Stack Web Developer";
  const funFact = "I love coding and exploring new technologies.";

  return (
    <div className="container">
      <div className="profile-card">
        <h1>{yourName}</h1>
        <h2>{yourAim}</h2>
        <p>
          Hello! This is my simple React Profile Card created using JSX and
          JavaScript variables.
        </p>
        <p>
          <strong>Fun Fact:</strong> {funFact}
        </p>
      </div>
    </div>
  );
};

export default App;