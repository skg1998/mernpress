import React, { Component } from 'react';
import { Button, Card, CardHeader, Grid, withStyles, Select, MenuItem } from '@material-ui/core';
import * as Api from '../../Api';
import Snackbar from "../../components/Snackbar/Snackbar"

const useStyles = (theme) => ({
    card: {
        alignItems: "center"
    },
    imageupload: {
        padding: "18.5px 0px",
        borderRadius: "3px",
        width: "100%",
        borderWidth: "1px",
        borderStyle: 'inset',
        borderColor: 'rgb(173 173 173 / 76%)'
    }
});

class AddBanner extends Component {
    constructor() {
        super();
        this.state = {
            files: [],
            flag: false,
            notification: false
        }
    }
    handleSubmit = event => {
        event.preventDefault();
        const { files, flag } = this.state;
        let formData = new FormData();

        for (let i = 0; i < files.length; i++) {
            formData.append(`files[${i}]`, files[i])
        }
        formData.append(`flag`, flag);

        Api.AddBanner(formData).then((data) => {
            if (data.error) {
                console.log(data.error)
            } else {
                console.log(data)
            }
        })

        this.setState({ notification: true })
    }

    handleChange = (e) => {
        this.setState({
            files: e.target.files
        });
    }

    handleClose = (e) => {
        this.setState({ notification: false })
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
                    <Card style={{ padding: '20px' }}>
                        <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
                            <CardHeader style={{ color: '#3f51b5' }} title="Add Banner Image" />
                            <Grid item xs={12}>
                                <input className={classes.imageupload} style={{ display: 'none' }} type="file" accept="image/*" multiple name="files" onChange={this.handleChange} style={{ marginTop: '10px', width: '100%' }} />
                            </Grid>
                            <Grid item xs={12}>
                                <Select
                                    name="flag"
                                    onChange={this.handleChange}
                                    label="Banner"
                                    variant="outlined"
                                    style={{ marginTop: '10px', width: '100%' }}
                                >
                                    <MenuItem value="false"><em>disable</em></MenuItem>
                                    <MenuItem value="true"><em>visible</em></MenuItem>
                                </Select>
                            </Grid>
                            <Button variant="contained" color="primary" type="submit" style={{ marginTop: '10px', width: '100%' }}> Add Banner Image </Button>
                            <Snackbar
                                message={"Button Click"}
                                color="success"
                                close={true}
                                place="tr"
                                open={this.state.notification}
                                closeNotification={this.handleClose}
                            />
                        </form>
                    </Card>
                </Grid>
            </div>
        );
    }
}

export default withStyles(useStyles)(AddBanner);