import React, { Component } from 'react';
import { Button,TextField ,Card ,CardHeader, Grid , withStyles,Select,MenuItem } from '@material-ui/core';
import * as Api from '../Api';


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

class AddProduct extends Component {
    state = {
        name: '',
        files:'',
        description:'',
        category:'',
        quantity:'',
        price:'',
        fetchCategory:[]
    };


    componentDidMount() {
        Api.Category()
        .then(categoryData => {
            console.log(categoryData)
            this.setState({ fetchCategory: categoryData });
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        const {name, files, description, category, quantity, price} = this.state;
        let formData = new FormData();

        for (let i = 0; i < files.length; i++) {
            formData.append(`files[${i}]`, files[i])
        }

        formData.append(name)
        formData.append(description)
        formData.append(category)
        formData.append(quantity)
        formData.append(price)


        // Api.addProduct(formData).then((data) => {
            // if (data.error) {
            //     console.log(data.error)
            // } else {
            //     console.log(data)
            // }
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
                        <CardHeader style={{color:'#3f51b5'}} title="Add Product" />
                        <Grid item xs={12}>
                            <TextField  label="Product Name" variant="outlined"  type = "text" name = "name" onChange= {this.handleChange} style={{marginTop:'10px', width:'100%'}}/>
                        </Grid>
                        <Grid item xs={12}>    
                            <input  className={classes.imageupload} type = "file" accept="image/*" multiple name = "files" onChange= {this.handleChange} style={{marginTop:'10px', width:'100%'}}/>
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
                                {this.state.fetchCategory.map(data =>
                                    <MenuItem value={data._id}>{data.name}</MenuItem>
                                )}
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