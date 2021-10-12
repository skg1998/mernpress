import React from "react";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { grey } from "@material-ui/core/colors";
import PersonAdd from "@material-ui/icons/PersonAdd";
import TextField from "@material-ui/core/TextField";
import SEO from '../components/SEO/Seo';


const ForgotPassword = () => {
    const styles = {
        loginContainer: {
            minWidth: 320,
            maxWidth: 400,
            height: "auto",
            position: "absolute",
            top: "20%",
            left: 0,
            right: 0,
            margin: "auto"
        },
        paper: {
            padding: 20,
            overflow: "auto"
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
        }
    };

    return (
        <div>
            <div style={styles.loginContainer}>
                <SEO title="Forgot Password" description="A Multi-vendor ecommerce site" />
                <Paper style={styles.paper}>
                    <form>
                        <TextField hintText="E-mail" label="E-mail" fullWidth={true} />
                        <div style={{ marginTop: 10 }}>
                            <Link to="/">
                                <Button variant="contained" color="primary" style={styles.loginBtn}>
                                    Reset Password
                                </Button>
                            </Link>
                        </div>
                    </form>
                </Paper>

                <div style={styles.buttonsDiv}>
                    <Button href="/signin" style={styles.flatButton}>
                        <PersonAdd />
                        <span style={{ margin: 5 }}>Login</span>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
