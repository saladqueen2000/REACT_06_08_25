import React, { useState } from "react";
import ChildComponent from "./ChildComponent"; 

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [userName, setUserName] = useState("");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Parent Component</h2>
      <label>
        User Name:
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          style={{ marginLeft: "10px" }}
        />
      </label>
      <br />
      <button onClick={() => setCount(count + 1)} style={{ marginTop: "10px" }}>
        Tăng count
      </button>

      <ChildComponent count={count} userName={userName} />
    </div>
  );
}

export default ParentComponent;
