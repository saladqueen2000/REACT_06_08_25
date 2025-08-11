import React from "react";

function ChildComponent({ count, userName }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", marginTop: "10px" }}>
      <h3>Child Component</h3>
      <p>👤 User: {userName}</p>
      <p>🔢 Count: {count}</p>
    </div>
  );
}

export default ChildComponent;
