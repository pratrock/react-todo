import React from "react";

export default function input({ name, value, handleChange }) {
  return (
    <div>
      <input type="text" name={name} value={value} onChange={handleChange} />
    </div>
  );
}
