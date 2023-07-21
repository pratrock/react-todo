import React from "react";

export default function ({ onClick, name }) {
  return (
    <>
      <button onClick={onClick}>{name}</button>
    </>
  );
}
