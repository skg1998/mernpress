import React, { Component } from 'react';
import { Button,TextField ,Card ,CardHeader, Grid , withStyles } from '@material-ui/core';
import * as Api from '../Api';


const useStyles = (theme) => ({
    card: {
        alignItems: "center"
      },
  });

class AddCategory extends Component {
    constructor() {
        super();
        this.state = {
            name:"",
            files:[]
        }
      }

    handleSubmit = event => {
        event.preventDefault();
        const { name, files } = this.state;
        console.log("files",files);
        let formData = new FormData();
        formData.append("name", name);
        for (let i = 0; i < files.length; i++) {
            formData.append(`files[${i}]`, files[i])
        }

        Api.AddCategory(formData).then((data) => {
            if (data.error) {
                console.log(data.error)
            } else {
                console.log(data)
            }
        })
    }
    
    handleChange = (event) => {
        const target = event.target;
        const field =  target.name;
        const value = target.value

        this.setState({
            [field]:  value
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
                        <CardHeader style={{color:'#3f51b5'}} title="Add Category" />
                        <Grid item xs={12}>
                            <TextField id="outlined-basic" label="Category Name" variant="outlined"  type = "text" name = "name" onChange= {this.handleChange} style={{marginTop:'10px', width:'100%'}}/>
                        </Grid>
                        <Grid item xs={12}>    
                            <input  type = "file" accept="image/*" multiple name = "files" onChange= {this.handleChange} style={{marginTop:'10px', width:'100%'}}/>
                        </Grid>
                        <Button  variant="contained" color="primary" type = "submit" style={{ marginTop:'10px',width:'100%'}}> Submit </Button>
                    </form>
                </Card>
            </Grid> 
        </div>
        );
  }
}

export default withStyles(useStyles)(AddCategory);