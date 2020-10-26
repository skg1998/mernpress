import React, { Component } from 'react';
import { Button,Card ,CardHeader, Grid , withStyles } from '@material-ui/core';
import * as Api from '../Api';

const useStyles = (theme) => ({
    card: {
        flexGrow: 1,
        maxWidth: "40%",
        minHeight: "20vh",
        display: "flex",
        alignItems: "center"
      },
  });

class AddSlidderImage extends Component {
    state = {
        files: []
    };

    handleSubmit = event => {
        event.preventDefault();
        const slidderImage = {
            files: this.state.files
        }

        console.log("slidderImage",slidderImage);

        Api.AddSlider(slidderImage).then((data) => {
            if (data.error) {
              console.log(data.error)
            } else {
                console.log(data)
            }
          })
    }

    fileData = () => { 
        if (this.state.files[0]) { 
          return ( 
            <div> 
              <h2>File Details:</h2> 
              <p>File Name: {this.state.files[0].name}</p> 
              <p>File Type: {this.state.files[0].type}</p> 
              <p> 
                Last Modified:{" "} 
                {this.state.files[0].lastModifiedDate.toDateString()} 
              </p> 
            </div> 
          ); 
        } else { 
          return ( 
            <div> 
              <br /> 
              <h4>Choose Image before upload </h4> 
            </div> 
          ); 
        } 
      }; 
    
    handleChange = (e) => {
        this.setState({
            files: [...this.state.files, ...e.target.files] 
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
                style={{
                    position: 'absolute', 
                    left: '50%', 
                    top: '50%',
                    transform: 'translate(-50%, -50%)'
                }}
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
            {this.fileData()}
        </div>
        );
  }
}

export default withStyles(useStyles)(AddSlidderImage);