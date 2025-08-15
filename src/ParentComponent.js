import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const randomId = function (length = 6) {
  return Math.random()
    .toString(36)
    .substring(2, length + 2);
};

function ParentComponent() {
  const [age, setAge] = useState(0);
  const [userName, setUserName] = useState("");
  let [arr, setArr] = useState([]);

  const onDelete = (id) => {
    setArr(arr.filter((item) => item.id !== id));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Parent Component</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <label style={{ width: "100px" }}>User Name:</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            style={{
              width: "200px",
              padding: "5px",
            }}
          />
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <label style={{ width: "100px" }}>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            style={{
              width: "200px",
              padding: "5px",
            }}
          />
        </div>
      </div>

      <br />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <button
          onClick={() => {
            setArr([
              ...arr,
              {
                id: randomId(),
                userName,
                age,
              },
            ]);
            
          }}
          style={{ marginTop: "10px" }}
        >
          Thêm
        </button>
      </div>
      {
      
      arr.length >= 1 ? <ChildComponent array={arr} onDelete={onDelete} /> : null
        
      }
    </div>
  );
}

export default ParentComponent;
