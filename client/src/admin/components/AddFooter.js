import React, { Component } from 'react';
import { Button ,Card ,CardHeader, Grid , withStyles,Select,MenuItem } from '@material-ui/core';
import * as Api from '../../Api';

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

class AddFooter extends Component {
    constructor() {
        super();
        this.state = {
            footer:"false"
        }
      }
    handleSubmit = event => {
        event.preventDefault();
        const {footer} = this.state
        console.log("footer",footer)
    }
    
    handleChange = (e) => {
        this.setState({
            footer: e.target.value 
        });
    }


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
                <form onSubmit = { this.handleSubmit } noValidate autoComplete="off">
                        <CardHeader style={{color:'#3f51b5'}} title="Add Footer" />
                        <Grid item xs={12}>    
                            <Select
                                name="footer"
                                onChange= {this.handleChange}
                                label="Footer"
                                variant="outlined"
                                style={{marginTop:'10px', width:'100%'}}
                                >
                                <MenuItem value="false"><em>disable</em></MenuItem>
                                <MenuItem value="true"><em>visible</em></MenuItem>
                            </Select>
                        </Grid>
                        <Button  variant="contained" color="primary" type="submit" style={{ marginTop:'10px',width:'100%'}}> Add Footer </Button>
                    </form>
                </Card>
            </Grid> 
        </div>
        );
  }
}

export default withStyles(useStyles)(AddFooter);