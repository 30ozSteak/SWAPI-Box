import React from "react";
import "./Error.css";

const Error = ({ error }) => {
  return (
    <div className="error">
      <h2>This isn't the data you were looking for </h2>
      <h1>
        4<span className="death" />4
      </h1>
    </div>
  );
};

export default Error;
