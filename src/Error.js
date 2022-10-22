import React from "react";
import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  return (
    <div className="main-title">
      <h1>404 Page not found</h1>
      <br />
      <button className="filter-btn" onClick={() => navigate("/")}>
        Go Home
      </button>
    </div>
  );
}

export default Error;
