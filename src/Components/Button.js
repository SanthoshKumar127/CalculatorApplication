import React from "react";

function Button({ colSpan = 1, name, handleClick }) {
  return (
    <td colSpan={colSpan}>
      <button style={{ width: "100%" }} onClick={() => handleClick(name)}>
        {name}
      </button>
    </td>
  );
}

export default Button;
