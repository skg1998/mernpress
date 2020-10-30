import React, { Component } from 'react';
import { Button,TextField ,Card ,CardHeader, Grid , withStyles } from '@material-ui/core';
import {Redirect ,Link} from 'react-router-dom';
import {Adminsignup} from '../Api';


const useStyles = (theme) => ({
    card: {
        flexGrow: 1,
        maxWidth: "40%",
        minHeight: "20vh",
        display: "flex",
        alignItems: "center"
      },
  });

class AdminSignup extends Component {
    state = {
        username:'',
        email: '',
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
        const adminSignup = {
            username: this.state.username || undefined,
            email: this.state.email || undefined,
            password:this.state.password || undefined
        }

        Adminsignup(adminSignup).then((data) => {
            if (data.error) {
              this.setState({error: data.error})
            } else {
                this.setState({redirectToReferrer: true})
            }
          })
    }

    render() { 
        const { classes } = this.props;
        const {from} = this.props.location.state || {
            from: {
                pathname: '/adminlogin'
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
                        <CardHeader style={{color:'#3f51b5'}} title="Sign Up" />
                        <Grid item xs={12}>
                            <TextField id="outlined-basic" label="UserName" variant="outlined"  type = "email" name = "username" onChange= {this.handleChange} style={{marginTop:'10px', width:'100%'}}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="outlined-basic" label="Email" variant="outlined"  type = "email" name = "email" onChange= {this.handleChange} style={{marginTop:'10px', width:'100%'}}/>
                        </Grid>
                        <Grid item xs={12}>    
                            <TextField id="outlined-basic" label="Password"  variant="outlined"  type = "password" name = "password" onChange= {this.handleChange} style={{marginTop:'10px', width:'100%'}}/>
                        </Grid>
                        <Button  variant="contained" color="primary" type = "submit" style={{ marginTop:'10px',width:'100%'}}> SignUp </Button>
                    </form>
                    <Link to="/adminlogin">Sing In</Link>
                </Card>
            </Grid> 
        </div>
        );
  }
}

export default withStyles(useStyles)(AdminSignup);