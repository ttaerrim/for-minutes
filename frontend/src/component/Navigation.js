import React from "react";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <div className="navigation">
      <Link to="/">Home </Link>
      <Link to="/minutes">MinutesList </Link>
      <Link to="/post">Post </Link>
    </div>
  );
};

export default Navigation;
