import React, { Component } from 'react';
import { Button,TextField ,Card ,CardHeader, Grid , withStyles } from '@material-ui/core';
//import axios from "axios";


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

class AddShop extends Component {
    state = {
        name: '',
        image:'',
        discription:''
    };

    handleChange = (event) => {
        const target = event.target;
        const field =  target.name;
        const value = target.value

        this.setState({
            [field]:  value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        const Addshop = {
            name: this.state.name || undefined,
            image:this.state.image || undefined,
            description:this.state.discription || undefined
        }
        console.log("Addshop", Addshop)

        // axios.post('https://localhost:3000/api/v1/addShop', { Addshop })
        // .then(res=>{
        //     console.log(res);
        //     console.log(res.data);
        //     window.location = "/retrieve" 
        // })

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
                        <CardHeader style={{color:'#3f51b5'}} title="Add Shop" />
                        <Grid item xs={12}>
                            <TextField id="outlined-basic" label="Name" variant="outlined"  type = "text" name = "name" onChange= {this.handleChange} style={{marginTop:'10px', width:'100%'}}/>
                        </Grid>
                        <Grid item xs={12}>    
                            <TextField id="outlined-basic" variant="outlined"  type = "file" name = "image" onChange= {this.handleChange} style={{marginTop:'10px', width:'100%'}}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="outlined-basic" label="Description" variant="outlined"  type = "text" name = "description" onChange= {this.handleChange} style={{marginTop:'10px', width:'100%'}}/>
                        </Grid>
                        <Button  variant="contained" color="primary" type = "submit" style={{ marginTop:'10px',width:'100%'}}> Add Shop </Button>
                    </form>
                </Card>
            </Grid> 
        </div>
        );
  }
}

export default withStyles(useStyles)(AddShop);