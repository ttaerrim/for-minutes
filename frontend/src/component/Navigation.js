import React from "react";
import { Link } from "react-router-dom";
import { Heading, Text } from "gestalt";
import "gestalt/dist/gestalt.css";


const Navigation = () => {
  return (
    <Text align="center" bold>
      <Heading size="samll" color="black">
<<<<<<< HEAD
     
      <div className="navigation">   
      <Link to="/">Home </Link>
      <Link to="/minutes">MinutesList </Link>
      <Link to="/post">Post </Link>

      </div>
 
=======
        <div className="navigation">
          <Link to="/">Home </Link>
          <Link to="/minutes">MinutesList </Link>
          <Link to="/post">Post </Link>
        </div>
>>>>>>> 53d5e38d58f80a99bd46ab0671bb71d710106a99
      </Heading>
      </Text>
    
  );
};

export default Navigation;