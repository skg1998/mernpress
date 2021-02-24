import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { connect } from "react-redux";
import { useDispatch } from 'react-redux';
import { adminActions } from '../../store/actions';
import { Button, TextField, Card, CardHeader, Grid, withStyles } from '@material-ui/core';
import SEO from "../../components/SEO/Seo";

const useStyles = (theme) => ({
    card: {
        flexGrow: 1,
        maxWidth: "40%",
        minHeight: "20vh",
        display: "flex",
        alignItems: "center"
    },
});

function WarningAlert(props) {
    return <div {...props} />
}

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const location = useLocation();
    const classes = useStyles();

    // reset login status
    useEffect(() => {
        dispatch(adminActions.logout());
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (email === '' || password === '') {
            setError("Feilds are Required");
        }
        props.dispatch(adminActions.login(email, password));
    }

    return (
        <div >
            <SEO title="Admin - Login " description="A Multi-vendor ecommerce site" />
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
                <Card style={{ padding: '20px' }}>
                    {error && (
                        <WarningAlert severity="error" onClick={() => setError(null)}>
                            {props.error || error}
                        </WarningAlert>
                    )}
                    <form onSubmit={handleSubmit} noValidate autoComplete="off">
                        <CardHeader style={{ color: '#3f51b5' }} title="Login" />
                        <Grid item xs={12}>
                            <TextField
                                id="outlined-basic"
                                label="Email"
                                variant="outlined"
                                type="email"
                                name="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                style={{ marginTop: '10px', width: '100%' }}
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
                                onChange={e => setPassword(e.target.value)}
                                style={{ marginTop: '10px', width: '100%' }}
                            />
                        </Grid>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            style={{ marginTop: '10px', width: '100%' }}
                        > SignIn </Button>
                    </form>
                    <Link to="/adminsignup">Sing Up</Link>
                </Card>
            </Grid>
        </div>
    );
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedLoginPage = connect(mapStateToProps)(Login);
export { connectedLoginPage as AdminLogin }; 