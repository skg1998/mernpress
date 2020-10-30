import React, { Component } from 'react';
import { Button,TextField ,Card ,CardHeader, Grid , withStyles } from '@material-ui/core';
import {Redirect , Link} from 'react-router-dom'
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

class AdminLogin extends Component {
    state = {
        admin: '',
        password:'',
        redirectToReferrer:false
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
        const adminLogin = {
            admin: this.state.admin || undefined,
            password:this.state.password || undefined
        }
        this.setState({redirectToReferrer: true})
    }
    render() { 
        const { classes } = this.props;
        const {from} = this.props.location.state || {
            from: {
                pathname: '/admin'
            }
        }

        const {redirectToReferrer} = this.state

        if (redirectToReferrer) {
            return (<Redirect to={from}/>)
        }

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
                        <CardHeader style={{color:'#3f51b5'}} title="Login" />
                        <Grid item xs={12}>
                            <TextField id="outlined-basic" label="Email" variant="outlined"  type = "email" name = "admin" onChange= {this.handleChange} style={{marginTop:'10px', width:'100%'}}/>
                        </Grid>
                        <Grid item xs={12}>    
                            <TextField id="outlined-basic" label="Password"  variant="outlined"  type = "password" name = "password" onChange= {this.handleChange} style={{marginTop:'10px', width:'100%'}}/>
                        </Grid>
                        <Button  variant="contained" color="primary" type = "submit" style={{ marginTop:'10px',width:'100%'}}> SignIn </Button>
                    </form>
                    <Link to="/adminsignup">Sing Up</Link>
                </Card>
            </Grid> 
        </div>
        );
  }
}

export default withStyles(useStyles)(AdminLogin);