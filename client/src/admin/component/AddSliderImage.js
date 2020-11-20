import React, { Component } from 'react';
import { Button,Card ,CardHeader, Grid , withStyles } from '@material-ui/core';
import * as Api from '../Api';

const useStyles = (theme) => ({
    card: {
        // flexGrow: 1,
        // maxWidth: "40%",
        // minHeight: "20vh",
        // display: "flex",
        alignItems: "center"
      },
  });

class AddSlidderImage extends Component {
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
      Api.AddSlider(formData).then((data) => {
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
              // style={{
              //     position: 'absolute', 
              //     left: '50%', 
              //     top: '50%',
              //     transform: 'translate(-50%, -50%)'
              // }}
          >
              <Card style={{padding:'20px'}}>
                  <form onSubmit = { this.handleSubmit } noValidate autoComplete="off">
                      <CardHeader style={{color:'#3f51b5'}} title="Add Slidder Image" />
                      <Grid item xs={12}>    
                          <input  type = "file" accept="image/*" multiple name = "files" onChange= {this.handleChange} style={{marginTop:'10px', width:'100%'}}/>
                      </Grid>
                      <Button  variant="contained" color="primary" type = "submit" style={{ marginTop:'10px',width:'100%'}}> Add Slider Image </Button>
                  </form>
              </Card>
          </Grid> 
      </div>
      );
  }
}

export default withStyles(useStyles)(AddSlidderImage);
