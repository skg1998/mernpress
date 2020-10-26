import React, { Component } from 'react';
import { Button,TextField ,Card ,CardHeader, Grid , withStyles,Paper } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel'

const useStyles = (theme) => ({
    card: {
        flexGrow: 1,
        maxWidth: "100%",
        minHeight: "60vh",
        display: "flex",
        alignItems: "center"
      },
      images:{
          width:'100%'
      }  
  });


 var items = [
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZt8d1mgtklavbKbSTH5b34n3dWOuCE8Z-EA&usqp=CAU",
        description: "Probably the most random thing you have ever seen!"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT60uC1OpAZkKQJUClwnpOvIInZeVvq-Ovx2g&usqp=CAU",
        description: "Hello World!"
    }
]

class Slidder extends Component {

    render() { 
        const { classes } = this.props;
        return (
        <div > 
            <Grid
               container
                className={classes.card}
                spacing={0}
                alignItems="center"
                justify="center"
            >
                <Carousel
                   animation="slide"
                >
                    {
                        items.map( (item, i) => 
                            <Paper>
                                <img className={classes.images} src={item.image} />
                           </Paper>
                        )
                    }
                </Carousel>
            </Grid> 
        </div>
        );
  }
}

export default withStyles(useStyles)(Slidder);