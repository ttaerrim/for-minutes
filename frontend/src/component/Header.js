import React from "react";
import {
  Box,
  Text,
  Link,
} from "gestalt";
import "gestalt/dist/gestalt.css";
import "./Header.css";
import Navigation from "./Navigation";
import logo from "../images/fmlogo.png";
import { useHistory } from "react-router";
const Header = () => {
  const history = useHistory();
  const goHome = () => {
    history.push("/");
  };
  return (

    <nav role="navigation" class="primary-navigation">
      <ul>
        <li className="li-set"><a href="/">Home</a></li>
        <li  className="li-set"><a href="/about">About Us</a></li>
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        <li className="li-set"><a href="/minutes">MinutesList</a></li>
        <li className="li-set"><a href="/post">Post</a></li>
      </ul>
      <hr/>
    </nav>

  );
};

export default Header;
