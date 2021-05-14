import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Card from '@material-ui/core/Card';
import { CardActions, CardContent } from '@material-ui/core';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import Grid from '@material-ui/core/Grid'
import { DialogActions, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core"

import SEO from '../components/SEO/Seo';

const useStyles = makeStyles((theme) => ({
    card: {
        padding: '10px',
        boxShadow: '0 4px 9px 0 rgba(0,0,0,0.2)'
    },
    error: {
        verticalAlign: 'middle'
    },
    title: {
        color: '#4C3A98',
        display: 'flex',
        justifyContent: 'center',
        height: '20%',
        fontSize: '3rem',
        fontWeight: 'bold',
    },
    textField: {
        marginTop: '10px',
        width: '100%'
    },
    submit: {
        backgroundColor: '#ff0c0c',
        padding: '10px',
        width: '100%',
        textAlign: 'center',
        color: '#FFFFFF',
        border: 'none',
        borderRadius: ' 15px',
        boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'
    }
}))

const Signin = () => {
    const [input, setInput] = useState({ email: '', password: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = name => event => {
        setInput({ [name]: event.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        const user = {
            name: input.name || undefined,
            email: input.email || undefined,
            password: input.password || undefined
        };

        console.log(user);
    };

    const classes = useStyles();

    return (
        <div>
            <SEO title="SignIn - Mernpress " description="A Multi-vendor ecommerce site" />
            <Grid
                container
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
                <form onSubmit={handleSubmit}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography
                                type="headline"
                                component="h2"
                                className={classes.title}
                            >
                                Sign In
                        </Typography>
                            <TextField
                                id="email"
                                type="email"
                                label="Email"
                                variant="outlined"
                                className={classes.textField}
                                value={input.email}
                                onChange={handleChange}
                            />
                            <TextField
                                id="password"
                                type="password"
                                label="Password"
                                variant="outlined"
                                className={classes.textField}
                                value={input.password}
                                onChange={handleChange}
                            />
                        </CardContent>
                        <CardActions>
                            <Button
                                variant="contained"
                                type="submit"
                                color="primary"
                                className={classes.submit}
                            >
                                Submit
                            </Button>
                        </CardActions>
                    </Card>
                </form>
                <Dialog open={submitted} disableBackdropClick={true}>
                    <DialogTitle>New Account</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Login successfully .
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Link to="/signup">
                            <Button color="primary" autoFocus="autoFocus" variant="raised">
                                Sign Up
                        </Button>
                        </Link>
                    </DialogActions>
                </Dialog>
            </Grid>
        </div>
    );
}

Signin.propTypes = {
    classes: PropTypes.object.isRequired
}

export default Signin