import React, { useEffect, useState } from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Card, CardActions, CardContent } from "@material-ui/core"
import Help from "@material-ui/icons/Help";
import PersonAdd from "@material-ui/icons/PersonAdd";
import { grey } from "@material-ui/core/colors";
import FacebookIcon from '@material-ui/icons/Facebook';
import GTranslateIcon from '@material-ui/icons/GTranslate';

import { connect, useDispatch } from "react-redux";
import { userActions } from '../store/actions'

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
    },
    buttonsDiv: {
        textAlign: "center",
        padding: 10
    },
    flatButton: {
        color: grey[500],
        margin: 5
    },
    loginBtn: {
        float: "right"
    },
    btn: {
        background: "#4f81e9",
        color: "white",
        padding: 7,
        borderRadius: 2,
        margin: 2,
        fontSize: 13
    },
    btnFacebook: {
        background: "#4f81e9"
    },
    btnGoogle: {
        background: "#e14441"
    },
    btnSpan: {
        marginLeft: 5
    }
}))

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const location = useLocation();
    const classes = useStyles();
    const history = useHistory();

    // reset login status
    useEffect(() => {
        dispatch(userActions.logout());
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === '' || password === '') {
            setError("Feilds are Required");
        }
        props.dispatch(userActions.login(email, password))
        setSubmitted(true);
    };

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
                <Grid item xs={12} md={9} sm={6}>
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
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                                <TextField
                                    id="password"
                                    type="password"
                                    label="Password"
                                    variant="outlined"
                                    className={classes.textField}
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
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

                </Grid>
                <Grid item xs={12} md={9} sm={6}>
                    <div className={classes.buttonsDiv}>
                        <Button href="/signup" className={classes.flatButton}>
                            <PersonAdd />
                            <span className={{ margin: 5 }}>Register</span>
                        </Button>

                        <Button href="/forgot-password" className={classes.flatButton}>
                            <Help />
                            <span className={{ margin: 5 }}>Forgot Password?</span>
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={12} md={9} sm={6}>
                    <Link to="/facebook" className={{ ...classes.btn, ...classes.btnFacebook }}>
                        <FacebookIcon />
                        <span className={classes.btnSpan}>Log in with Facebook</span>
                    </Link>
                    <Link to="/googlelogin" className={{ ...classes.btn, ...classes.btnGoogle }}>
                        <GTranslateIcon />
                        <span className={classes.btnSpan}>Log in with Google</span>
                    </Link>
                </Grid>
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

Login.propTypes = {
    classes: PropTypes.object.isRequired
}

const connectedLoginPage = connect(mapStateToProps)(Login);
export { connectedLoginPage as Signin };