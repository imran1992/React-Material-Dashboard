import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { withStyles } from "@material-ui/core/styles";
// core components
import  typographyStyle from "../../assets/jss/material-dashboard-react/components/typographyStyle.jsx";

const Success = ({ ...props }) => {
  const { classes, children } = props;
  return (
    <div className={classes.defaultFontStyle + " " + classes.successText}>
      {children}
    </div>
  );
};

Success.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(typographyStyle)(Success);
