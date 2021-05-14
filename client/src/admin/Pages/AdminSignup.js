import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { adminActions } from '../../store/actions';
import { Button, TextField, Card, Grid, makeStyles, Typography } from '@material-ui/core';
import SEO from "../../components/SEO/Seo";

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
        boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
        marginTop: '10px'
    }
}))

function WarningAlert(props) {
    return <div {...props} />
}

const AdminSignup = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const location = useLocation();
    const classes = useStyles();

    // reset Signup status
    useEffect(() => {
        dispatch(adminActions.logout());
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (email === '' || password === '' || username === '') {
            setError("Feilds are Required");
        }
        //props.dispatch(adminActions.Signup(username, email, password));
    }

    return (
        <div >
            <SEO title="Admin - Signup " description="A Multi-vendor ecommerce site" />
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
                <Card className={classes.card}>
                    {error && (
                        <WarningAlert severity="error" onClick={() => setError(null)}>
                            {props.error || error}
                        </WarningAlert>
                    )}
                    <form onSubmit={handleSubmit} noValidate autoComplete="off">
                        <Typography
                            type="headline"
                            component="h2"
                            className={classes.title}
                        >
                            SignUp
                        </Typography>
                        <Grid item xs={12}>
                            <TextField
                                id="outlined-basic"
                                label="Username"
                                variant="outlined"
                                name="username"
                                value={username}
                                className={classes.textField}
                                onChange={e => setUsername(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="outlined-basic"
                                label="Email"
                                variant="outlined"
                                type="email"
                                name="email"
                                value={email}
                                className={classes.textField}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="outlined-basic"
                                label="Password"
                                variant="outlined"
                                type="password"
                                name="password"
                                value={password}
                                className={classes.textField}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Grid>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            className={classes.submit}
                        > SignIn </Button>
                    </form>
                    <Link to="/adminlogin">Sing In</Link>
                </Card>
            </Grid>
        </div>
    );
}

// function mapStateToProps(state) {
//     const { loggingIn } = state.authentication;
//     return {
//         loggingIn
//     };
// }

//const connectedSignupPage = connect(mapStateToProps)(Signup);
export default AdminSignup;