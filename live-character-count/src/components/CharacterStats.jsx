import { useEffect, useState } from "react";

function CharacterStats({ text }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(text.length);
  }, [text]);

  return (
    <div className="stats">
      <h3>Character Count: {count}</h3>

      {count > 100 && (
        <div className="warning">
          Warning! Character limit exceeded.
        </div>
      )}
    </div>
  );
}

export default CharacterStats;