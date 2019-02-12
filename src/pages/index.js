import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import Page from "../components/Page";
import List from "../components/List";
import Tabs from "../components/Tabs";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../utils/withRoot";
import Typography from "@material-ui/core/Typography";
import { Alien } from "mdi-material-ui";
import { Robot } from "mdi-material-ui";
import logo from "../../images/logo.png";
import Hidden from "@material-ui/core/Hidden";

const styles = theme => ({
    angles: {
      color: theme.palette.secondary.light,
    },
    logo: {
      marginBottom: "40px",
      width: "100px",
      border: "0",
    },
    text: {
      textAlign: "center",
    },
    tabs: {
      marginTop: "40px",
      marginBottom: "40px",
    },
  }),
  Home = props => {
    const {
      classes,
      data: {
        Products: { edges: products },
        Services: { edges: services },
        Basic: {
          siteMetadata: {
            domain,
            company,
            defaultTitle,
            preamble,
            postamble,
            defaultDescription,
            contact: { email },
          },
        },
      },
    } = props;
    return (
      <Hidden implementation="css">
        <Page>
          <SEO title={defaultTitle}>
            <meta name="description" content={defaultDescription} />
            <link rel="canonical" href={domain} />
          </SEO>
          <div className={classes.text}>
            <a href={domain}>
              <img src={logo} alt={company} className={classes.logo} />
            </a>
            <Typography
              paragraph
              color="primary"
              gutterBottom
              variant="h3"
              component="span"
            >
              <span className={classes.angles}>&lt;</span> hi{" "}
              <span className={classes.angles}>&gt;</span>
            </Typography>
            <Typography paragraph gutterBottom variant="body1" component="span">
              {preamble}
            </Typography>
            <Typography paragraph gutterBottom variant="body1" component="span">
              {defaultDescription}
            </Typography>
          </div>
          <div className={props.classes.tabs}>
            <Tabs
              items={[
                ["Our Products", <Robot />, <List items={products} />],
                ["Our Services", <Alien />, <List items={services} />],
              ]}
            />
          </div>
          <div className={classes.text}>
            <Typography paragraph gutterBottom variant="body1" component="span">
              {postamble}
            </Typography>
            <Typography
              paragraph
              color="primary"
              gutterBottom
              variant="h3"
              component="span"
            >
              <span className={classes.angles}>&lt;</span> {email}{" "}
              <span className={classes.angles}>&gt;</span>
            </Typography>
          </div>
        </Page>
      </Hidden>
    );
  };

export const query = graphql`
  query Name {
    Basic: site {
      siteMetadata {
        domain
        company
        defaultTitle
        preamble
        defaultDescription
        postamble
        contact {
          email
        }
      }
    }
    Products: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/products/" } }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            siteLink
            imageLink
            customWidth
            customTopPadding
          }
        }
      }
    }
    Services: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/services/" } }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            imageLink
          }
        }
      }
    }
  }
`;

export default withRoot(withStyles(styles, { withTheme: true })(Home));
