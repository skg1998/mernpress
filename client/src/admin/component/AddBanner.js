import React, { Component } from 'react';
import { Button,Card ,CardHeader, Grid , withStyles } from '@material-ui/core';
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

class AddBanner extends Component {
    constructor() {
        super();
        this.state = {
          files:[]
        }
      }
    handleSubmit = event => {
        event.preventDefault();
        const { files } = this.state;

        console.log("files",files);

        let formData = new FormData();

        for (let i = 0; i < files.length; i++) {
            formData.append(`files[${i}]`, files[i])
        }

        Api.AddBanner(formData).then((data) => {
            if (data.error) {
                console.log(data.error)
            } else {
                console.log(data)
            }
            })
    }
    
    handleChange = (e) => {
        this.setState({
            files: e.target.files 
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
                        <CardHeader style={{color:'#3f51b5'}} title="Add Banner Image" />
                        <Grid item xs={12}>    
                            <input className={classes.imageupload} style={{display:'none'}}  type = "file" accept="image/*" multiple name = "files" onChange= {this.handleChange} style={{marginTop:'10px', width:'100%'}}/>
                        </Grid>
                        <Button  variant="contained" color="primary" type = "submit" style={{ marginTop:'10px',width:'100%'}}> Add Banner Image </Button>
                    </form>
                </Card>
            </Grid> 
        </div>
        );
  }
}

export default withStyles(useStyles)(AddBanner);