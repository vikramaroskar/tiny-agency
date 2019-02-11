import React from "react";
import { withPrefix } from "gatsby";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../utils/withRoot";

const styles = theme => ({
    card: {
      height: "200px",
    },
    titleText: {
      textAlign: "center",
    },
    imageLink: {
      border: 0,
      width: "80%",
    },
  }),
  Link = props =>
    props.siteLink ? (
      <a href={props.siteLink}>{props.children}</a>
    ) : (
      <>{props.children}</>
    ),
  List = props => {
    const { classes } = props;
    return (
      <Grid spacing={24} container justify="center" alignItems="stretch">
        {props.items.map(edge => {
          const {
            node: {
              html,
              frontmatter: { title, siteLink, imageLink, image },
            },
          } = edge;
          return (
            <Grid item xs={12} md={4} key={title} style={{ height: "100%" }}>
              <Card>
                {image ? (
                  <CardMedia
                    image={withPrefix(image)}
                    className={classes.card}
                  />
                ) : (
                  undefined
                )}
                <CardContent>
                  {imageLink ? (
                    <center>
                      <Link siteLink={siteLink}>
                        <img
                          src={imageLink}
                          alt={title}
                          className={classes.imageLink}
                        />
                      </Link>
                    </center>
                  ) : (
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      className={classes.titleText}
                    >
                      <Link siteLink={siteLink}>{title}</Link>
                    </Typography>
                  )}
                  <Typography
                    component="p"
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    );
  };

export default withRoot(withStyles(styles)(List));
