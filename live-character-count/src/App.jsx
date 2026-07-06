import { useState } from "react";
import "./App.css";
import TextInput from "./components/TextInput";
import CharacterStats from "./components/CharacterStats";

function App() {
  const [text, setText] = useState("");

  return (
    <div className="container">
      <div className="card">
        <h1>Live Character Counter</h1>

        <TextInput
          text={text}
          setText={setText}
        />

        <CharacterStats text={text} />
      </div>
    </div>
  );
}

export default App;