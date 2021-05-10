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
import { DialogActions, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core"

import SEO from '../components/SEO/Seo';


const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: 600,
        margin: 'auto',
        textAlign: 'center',
        marginTop: theme.spacing.unit * 5,
        paddingBottom: theme.spacing.unit * 2
    },
    error: {
        verticalAlign: 'middle'
    },
    title: {
        marginTop: theme.spacing.unit * 2,
        color: theme.palette.openTitle
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 300
    },
    submit: {
        margin: 'auto',
        marginBottom: theme.spacing.unit * 2
    }
}))

const Signup = () => {
    const [input, setInput] = useState({ name: '', password: '', email: '' });
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
            <SEO title="Signup - Mernpress " description="A Multi-vendor ecommerce site" />
            <form onSubmit={handleSubmit}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography
                            type="headline"
                            component="h2"
                            className={classes.title}
                        >
                            Sign Up
                        </Typography>
                        <TextField
                            id="name"
                            label="Name"
                            className={classes.textField}
                            value={input.name}
                            onChange={handleChange}
                            margin="normal"
                        />{" "}
                        <TextField
                            id="email"
                            type="email"
                            label="Email"
                            className={classes.textField}
                            value={input.email}
                            onChange={handleChange}
                            margin="normal"
                        />
                        <TextField
                            id="password"
                            type="password"
                            label="Password"
                            className={classes.textField}
                            value={input.password}
                            onChange={handleChange}
                            margin="normal"
                        />
                    </CardContent>
                    <CardActions>
                        <Button
                            color="primary"
                            raised="raised"
                            type="submit"
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
                        New account successfully created.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Link to="/signin">
                        <Button color="primary" autoFocus="autoFocus" variant="raised">
                            Sign In
                        </Button>
                    </Link>
                </DialogActions>
            </Dialog>
        </div>
    );
}

Signup.propTypes = {
    classes: PropTypes.object.isRequired
}

export default Signup