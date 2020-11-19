//Import Dependencies
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

//Styles
const useStyles = makeStyles({
  title: {
    color: "#777777",
  },
});

const ErrorView = (error) => {
  const classes = useStyles();
  return (
    <div>
      <h3 className={classes.title}> Error: </h3>
      <p className={classes.title}>{error.error} </p>
    </div>
  );
};

export default ErrorView;
