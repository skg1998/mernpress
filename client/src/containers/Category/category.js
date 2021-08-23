import React from 'react';

//Grid
import Grid from '@material-ui/core/Grid';


const CategoryContainer = (props) => {
    return (
        <Grid container spacing={3} alignItems="stretch">
            <Grid item xs={12} sm={4}></Grid>
        </Grid>
    )
}

export default CategoryContainer;