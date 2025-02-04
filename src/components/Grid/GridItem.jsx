import React from "react";
// @material-ui/core components
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const style = {
  grid: {
    padding: "0 15px !important"
  }
};

const GridItem = ({ ...props }) => {
  const { classes, children, ...rest } = props;
  return (
    <Grid item {...rest} className={classes.grid}>
      {children}
    </Grid>
  );
};

export default withStyles(style)(GridItem);
