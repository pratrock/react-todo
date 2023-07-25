import React from "react";

export default function ({ onClick, name, classes, children }) {
  return (
    <>
      <button onClick={onClick} className={classes}>
        {children}
        {name}
      </button>
    </>
  );
}
