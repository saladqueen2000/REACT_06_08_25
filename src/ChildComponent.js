import React from "react";

function ChildComponent({ array, onDelete }) {
  return (
    <div
      style={{padding: "10px", marginTop: "10px", display: "flex", alignItems: "center", justifyContent: "center"
       }}
    >
      <table>
        <thead>
          <tr>
            <th>Họ và tên</th>
            <th>Tuổi</th>
            <th>Xoá</th>
          </tr>
        </thead>
        <tbody>
        {array.map((e) => {
          return (
            <tr key={e.id}>
              <td>{e.userName}</td>
              <td>{e.age}</td>
              <td>
                <button
                  onClick={() => onDelete(e.id)}
                  style={{ background: "red", color: "white", border: "none", padding: "5px 10px", cursor: "pointer" }}
                >
                  Xoá
                </button>
              </td>
            </tr>
          );
        })}
        </tbody>
      </table>
    </div>
  );
}

export default ChildComponent;
