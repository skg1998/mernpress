import React, { Component } from 'react';
import { Button,TextField ,Card ,CardHeader, Grid , withStyles } from '@material-ui/core';
import * as Api from '../Api'


const useStyles = (theme) => ({
    card: {
        flexGrow: 1,
        maxWidth: "40%",
        minHeight: "20vh",
        display: "flex",
        alignItems: "center"
      },
  });

class AddProjectTitle extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            image:''
        }
    }
    
    handleSubmit = event => {
        event.preventDefault();
        const { name, image } = this.state;
        console.log("name image",name,image);

        let formData = new FormData();
        formData.append('name', name);
        formData.append('image', image);

        Api.AddTitle(formData).then((data) => {
            if (data.error) {
              console.log(data.error)
            } else {
                console.log(data)
            }
        })
    }

    handleChange = e => {
        switch (e.target.name) {
            case 'image':
              this.setState({ image: e.target.files[0] });
              break;
            default:
              this.setState({ [e.target.name]: e.target.value });
          }
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
                        <CardHeader style={{color:'#3f51b5'}} title="Add your company Title" />
                        <Grid item xs={12}>
                            <TextField id="outlined-basic" label="Project Title" variant="outlined"  type = "text" value={this.state.name} name="name" onChange={this.handleChange}  style={{marginTop:'10px', width:'100%'}}/>
                        </Grid>
                        <Grid item xs={12}>    
                        <input  type = "file" accept="image/*" multiple name = "image" onChange={this.handleChange} style={{marginTop:'10px', width:'100%'}}/>
                        </Grid>
                        <Button  variant="contained" color="primary" type = "submit" style={{ marginTop:'10px',width:'100%'}}> Add Title </Button>
                    </form>
                </Card>
            </Grid> 
        </div>
        );
  }
}

export default withStyles(useStyles)(AddProjectTitle);