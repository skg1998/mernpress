import React, { Component } from 'react';
import { Button,TextField ,Card ,CardHeader, Grid , withStyles } from '@material-ui/core';

const useStyles = (theme) => ({
    card: {
        alignItems: "center"
      },
      imageupload:{
        padding : "18.5px 0px",
        borderRadius: "3px",
        width: "100%",
        borderWidth: "1px",
        borderStyle: 'inset',
        borderColor: 'rgb(173 173 173 / 76%)'
    }  
  });

class AddPaymentMethod extends Component {

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
                <Card style={{padding:'20px'}}>
                    <CardHeader style={{color:'#3f51b5'}} title="Add Payment Method" />
                </Card>
            </Grid> 
        </div>
        );
  }
}

export default withStyles(useStyles)(AddPaymentMethod);