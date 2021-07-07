import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { blue } from '@material-ui/core/colors';

import TextField from "@material-ui/core/TextField";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';


const emails = ['username@gmail.com', 'user02@gmail.com'];

const useStyles = makeStyles({
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },
});

const ProductDailog = (props) => {
    const [title, setTitle] = useState();
    const [description, setDiscription] = useState();
    const [brand, setBrand] = useState();
    const [catalog, setCatalog] = useState();
    const [category, setCategory] = useState();
    const [discount, setDiscount] = useState();
    const [varients, setVarients] = useState(
        [{
            color: '',
            images: [],
            size: [{
                size: '',
                availabe: true,
                sku: '',
                price: 100
            }]
        }]
    );

    const { onClose, selectedValue, open } = props;
    const classes = useStyles();

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };

    const submitHandler = () => {

    }

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">Add New Product</DialogTitle>
            <form onSubmit={submitHandler}>
                <Card>
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item lg={6} sm={6} xl={6} xs={6}>
                                <TextField
                                    id="outlined-full-width"
                                    placeholder="Title"
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                />
                            </Grid>
                            <Grid item lg={6} sm={6} xl={6} xs={6}>
                                <TextField
                                    id="outlined-full-width"
                                    placeholder="Description"
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                    value={description}
                                    onChange={e => setDiscription(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item lg={6} sm={6} xl={6} xs={6}>
                                <TextField
                                    id="outlined-full-width"
                                    placeholder="Brand"
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                    value={brand}
                                    onChange={e => setBrand(e.target.value)}
                                />
                            </Grid>
                            <Grid item lg={6} sm={6} xl={6} xs={6}>
                                <TextField
                                    id="outlined-full-width"
                                    placeholder="Catalog"
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                    value={catalog}
                                    onChange={e => setCatalog(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item lg={6} sm={6} xl={6} xs={6}>
                                <TextField
                                    id="outlined-full-width"
                                    placeholder="Category"
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                    value={category}
                                    onChange={e => setCategory(e.target.value)}
                                />
                            </Grid>
                            <Grid item lg={6} sm={6} xl={6} xs={6}>
                                <TextField
                                    id="outlined-full-width"
                                    placeholder="Discount"
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                    value={discount}
                                    onChange={e => setDiscount(e.target.value)}
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

ProductDailog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};

export default ProductDailog;


