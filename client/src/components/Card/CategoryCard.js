import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    margin: "0 20px"
  },
  media: {
    height: 140
  }
};

const CategoryCard = (props) => {
  const { classes, image, headline,isMoving } = props;

  return (
    <a onClick={(e) => {
        if(isMoving) {
          e.preventDefault();
        }
      }} href='#' >
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image} title={headline} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {headline}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </a>
  );
}

export default withStyles(styles)(CategoryCard);