import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import TextField from "@material-ui/core/TextField";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import Dropzone from "react-dropzone";

const useStyles = makeStyles({

});

const CategoryDailog = (props) => {
    const [name, setName] = useState();
    const [fileNames, setFileNames] = useState([]);
    const [parent, setParent] = useState();
    const [ancestors, setAncestors] = useState();

    const { onClose, selectedValue, open } = props;
    const classes = useStyles();

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };

    const submitHandler = (e) => {

    }

    const handleDrop = acceptedFiles => setFileNames(acceptedFiles.map(file => file.name));

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">Add New Category</DialogTitle>
            <form onSubmit={submitHandler}>
                <Card>
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item lg={6} md={12} xl={12}>
                                <Grid item lg={12} sm={12} xl={12} xs={12}>
                                    <TextField
                                        id="outlined-full-width"
                                        placeholder="Name"
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="outlined"
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                    />
                                </Grid>
                                <Grid item lg={12} sm={12} xl={12} xs={12}>
                                    <TextField
                                        id="outlined-full-width"
                                        placeholder="Parent"
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="outlined"
                                        value={parent}
                                        onChange={e => setParent(e.target.value)}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item lg={6} md={12} xl={12}>
                                <Dropzone
                                    onDrop={handleDrop}
                                    accept="image/*"
                                    minSize={1024}
                                    maxSize={3072000}
                                >
                                    {({
                                        getRootProps,
                                        getInputProps,
                                        isDragActive,
                                        isDragAccept,
                                        isDragReject
                                    }) => {
                                        const additionalClass = isDragAccept
                                            ? "accept"
                                            : isDragReject
                                                ? "reject"
                                                : "";

                                        return (
                                            <div
                                                {...getRootProps({
                                                    className: `dropzone ${additionalClass}`
                                                })}
                                            >
                                                <input {...getInputProps()} />
                                                <span>{isDragActive ? "📂" : "📁"}</span>
                                                <p>Drag'n'drop images, or click to select files</p>
                                            </div>
                                        );
                                    }}
                                </Dropzone>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item lg={12} sm={12} xl={12} xs={12}>
                                <TextField
                                    id="outlined-full-width"
                                    placeholder="Ancestors"
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                    value={ancestors}
                                    onChange={e => setAncestors(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Button variant="contained" color="primary" type="submit">Submit</Button>
                        </Grid>
                    </CardContent>
                </Card>
            </form>
        </Dialog>
    );
}

export default CategoryDailog;


