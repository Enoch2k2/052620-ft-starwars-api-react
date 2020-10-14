import React from "react";
import { NavLink } from "react-router-dom";
// import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    color: "white",
    textDecoration: "none",
  },
});

export const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar>
        {/** Link here */}
        <Button color="inherit">
          <NavLink to="/" className={classes.root}>
            Home
          </NavLink>
        </Button>
        <Button color="inherit">
          <NavLink to="/characters" className={classes.root}>
            Characters
          </NavLink>
        </Button>
        <Button color="inherit">
          <NavLink to="/characters/new" className={classes.root}>
            Create Character
          </NavLink>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
