import React, { Component } from 'react';
import { Button,TextField ,Card ,CardHeader, Grid , withStyles,Select,MenuItem } from '@material-ui/core';
//import axios from "axios";


const useStyles = (theme) => ({
    card: {
        flexGrow: 1,
        maxWidth: "40%",
        minHeight: "20vh",
        display: "flex",
        alignItems: "center"
      },
  });

class AddProduct extends Component {
    state = {
        name: '',
        image:'',
        description:'',
        category:'',
        quantity:'',
        price:''
    };

    handleSubmit = event => {
        event.preventDefault();
        const addProduct = {
            name: this.state.name,
            image:this.state.image,
            description:this.state.description,
            category: this.state.category,
            quantity: this.state.quantity,
            price: this.state.price
        }

        // axios.post('https://localhost:3000/api/v1/title', { addProduct })
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
                style={{
                    position: 'absolute', 
                    left: '50%', 
                    top: '50%',
                    transform: 'translate(-50%, -50%)'
                }}
            >
                <Card style={{padding:'20px'}}>
                    <form onSubmit = { this.handleSubmit } noValidate autoComplete="off">
                        <CardHeader style={{color:'#3f51b5'}} title="Add Product" />
                        <Grid item xs={12}>
                            <TextField  label="Product Name" variant="outlined"  type = "text" name = "name" onChange= {this.handleChange} style={{marginTop:'10px', width:'100%'}}/>
                        </Grid>
                        <Grid item xs={12}>    
                            <TextField   variant="outlined"  type = "file" name = "image" onChange= {this.handleChange} style={{marginTop:'10px', width:'100%'}}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField  label="Description" variant="outlined"  type = "text" name = "description" onChange= {this.handleChange} style={{marginTop:'10px', width:'100%'}}/>
                        </Grid>
                        <Grid item xs={12}>
                            <Select
                                name="category"
                                onChange= {this.handleChange}
                                label="Category"
                                variant="outlined"
                                style={{marginTop:'10px', width:'100%'}}
                                >
                                <MenuItem value=""><em>None</em> </MenuItem>
                                <MenuItem value={10}>Mobile</MenuItem>
                                <MenuItem value={20}>laptop</MenuItem>
                                <MenuItem value={30}>earphones</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField  label="Quantity" variant="outlined"  type = "text" name = "quantity" onChange= {this.handleChange} style={{marginTop:'10px', width:'100%'}}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField  label="Price" variant="outlined"  type = "text" name = "price" onChange= {this.handleChange} style={{marginTop:'10px', width:'100%'}}/>
                        </Grid>
                        <Button  variant="contained" color="primary" type = "submit" style={{ marginTop:'10px',width:'100%'}}> Submit </Button>
                    </form>
                </Card>
            </Grid> 
        </div>
        );
  }
}

export default withStyles(useStyles)(AddProduct);