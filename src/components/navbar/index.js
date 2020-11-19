//Import Dependencies
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

//Styles
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    marginRight: theme.spacing(2),
    height: "30px",
    paddingLeft: "34px;",
  },
  title: {
    flexGrow: 1,
    fontSize: "15px",
    color: "#777777",
    textAlign: "end",
    paddingRight: "34px;",
  },
  navBar: {
    backgroundColor: "white",
    div: "flex",
    alignContent: "space-between",
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navBar}>
        <Toolbar>
          <IconButton aria-label="logo">
            <Button target="blank" href="https://www.cloudappi.net/">
              <img
                className={classes.logo}
                src="https://www.cloudappi.net/logo.png"
              ></img>
            </Button>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Oriana's Challenge Cloud Api
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
