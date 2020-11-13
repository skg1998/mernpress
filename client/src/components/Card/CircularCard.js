import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    margin: "0 20px",
    borderRadius:'100%'
  },
  media: {
    height: 50
  }
};

const CircularCard = (props) => {
  const { classes, image, title,isMoving } = props;

  return (
    <a onClick={(e) => {
        if(isMoving) {
          e.preventDefault();
        }
      }} href='#' >
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image} title={title} />
      </CardActionArea>
    </Card>
    <Typography gutterBottom variant="p" component="p">
      {title}
    </Typography>
  </a>
  );
}

export default withStyles(styles)(CircularCard);