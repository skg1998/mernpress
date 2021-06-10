import React, { useCallback } from 'react';

import { Box, Container, Grid } from '@material-ui/core';
import CategoryCard from '../../components/Card/CategoryCard'
import DialogComponent from '../../components/DailogComponent/DailogComponent'

const informative = [
    { name: 'Total Products', value: 15, },
    { name: 'Total Categories', value: 5, },
    { name: 'Toal Customers', value: 15, },
    { name: 'Total Admins', value: 3, }
]

const Category = (props) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = useCallback((e) => {
        setOpen(false);
    }, [])

    return (
        <Box
            sx={{
                backgroundColor: 'background.default',
                minHeight: '100%',
                py: 3
            }}
        >
            <Container maxWidth={false}>
                <Grid
                    container
                    spacing={3}
                >
                    {
                        informative.map(data => (
                            <Grid
                                item
                                lg={3}
                                sm={6}
                                xl={3}
                                xs={12}
                            >
                                <div onClick={handleClickOpen}>
                                    <CategoryCard />
                                </div>
                                <DialogComponent open={open} onClose={handleClose} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </Box>
    );
}

export default Category


