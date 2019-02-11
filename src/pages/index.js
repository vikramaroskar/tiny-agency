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

const styles = theme => ({
    logo: {
      marginBottom: "40px",
      width: "100px",
    },
    text: {
      textAlign: "center",
    },
    tabs: {
      marginTop: "40px",
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
            defaultDescription,
          },
        },
      },
    } = props;
    return (
      <Page>
        <SEO title={defaultTitle}>
          <meta name="description" content={defaultDescription} />
          <link rel="canonical" href={domain} />
        </SEO>
        <div className={classes.text}>
          <img src={logo} alt={company} className={classes.logo} />
          <Typography
            paragraph
            color="secondary"
            gutterBottom
            variant="h3"
            component="span"
          >
            hi
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
      </Page>
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

export default withRoot(withStyles(styles)(Home));
