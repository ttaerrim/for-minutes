import React from "react";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <div className="navigation">
      <Link to="/">Home</Link>
      <br />
      <Link to="/minutes">MinutesList</Link>
      <br />
      <Link to="/post">Post</Link>
    </div>
  );
};

export default Navigation;
