import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import {Button} from "@material-ui/core";

const Navigation = () => {
  return (
    <AppBar position="staic">
    <Toolbar>
      <h1>Login App</h1>
    </Toolbar>
    <div align="left">
    <a href="/">
        <Button>Home</Button>
      </a>  
    <a href="/"  onClick={() => {
     document.cookie = "loggedIn=false";
     window.location.replace("/");
     }}>
    <Button>
     Logout
     </Button>
    </a>
    <a href="https://github.com/tonezone108/Login-App">
      <Button>GITHUB</Button>
    </a>             
    </div>
  </AppBar>
);
};

export default Navigation;
