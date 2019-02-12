import React from "react";
import Footer from "./Footer";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";

const styles = theme => ({
  root: {
    maxWidth: "1168px",
    marginTop: "94px",
  },
});

class Page extends React.Component {
  render() {
    const { children, classes } = this.props;
    return (
      <Hidden implementation="css">
        <Grid container justify="center" alignItems="stretch">
          <Grid item xs className={classes.root}>
            {children}
            <Footer />
          </Grid>
        </Grid>
      </Hidden>
    );
  }
}

export default withStyles(styles)(Page);
