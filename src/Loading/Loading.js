import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading-box">
      <h1>fetching data</h1>
      <h2>
        from far far away
        <span className="loader dot1" />
        <span className="loader dot2" />
        <span className="loader dot3" />
      </h2>
    </div>
  );
};

export default Loading;
