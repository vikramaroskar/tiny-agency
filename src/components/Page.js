import React from "react";
import Footer from "./Footer";
import { Grid, Row, Col } from "react-flexbox-grid";
import withRoot from "../utils/withRoot";
import Hidden from "@material-ui/core/Hidden";

class Page extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Hidden implementation="css">
        <Grid style={{ marginTop: "94px" }}>
          <Row>
            <Col xs={12}>
              {children}
              <Footer />
            </Col>
          </Row>
        </Grid>
      </Hidden>
    );
  }
}

export default withRoot(Page);
