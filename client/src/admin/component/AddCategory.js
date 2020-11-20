import React, { Component } from 'react';
import { Button,TextField ,Card ,CardHeader, Grid , withStyles } from '@material-ui/core';
//import axios from "axios";


const useStyles = (theme) => ({
    card: {
        alignItems: "center"
      },
  });

class AddCategory extends Component {
    state = {
        name: '',
        image:''
    };

    handleSubmit = event => {
        event.preventDefault();
        const addCategory = {
            name: this.state.name,
            image:this.state.image
        }

        // axios.post('https://localhost:3000/api/v1/addCategory', { addCategory })
        // .then(res=>{
        //     console.log(res);
        //     console.log(res.data);
        //     window.location = "/retrieve" 
        // })
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
                            <TextField id="outlined-basic"  variant="outlined"  type = "file" name = "image" onChange= {this.handleChange} style={{marginTop:'10px', width:'100%'}}/>
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