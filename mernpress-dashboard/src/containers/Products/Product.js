import React from 'react';
import {
    Box,
    Container,
    Grid
} from '@material-ui/core';

import DialogComponent from './ProductDailog';
import ProductListToolbar from '../../components/Card/CardToolBox';
import ProductCard from '../../components/Card/CustomCard';

//image
import Image1 from '../../assets/img/product_1.jpg'
import Image3 from '../../assets/img/product_3.jpg'

const products = [
    {
        id: 1,
        createdAt: '27/03/2019',
        description: 'Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.',
        image: Image1,
        title: 'Sport Shoes',
        totalDownloads: '594'
    },
    {
        id: 2,
        createdAt: '31/03/2019',
        description: 'Medium is an online publishing platform developed by Evan Williams, and launched in August 2012.',
        image: Image3,
        title: 'Redmi 7',
    },
    {
        id: 3,
        createdAt: '03/04/2019',
        description: 'Slack is a cloud-based set of team collaboration tools and services, founded by Stewart Butterfield.',
        image: Image1,
        title: 'Men Shirt',
    },
    {
        id: 4,
        createdAt: '04/04/2019',
        description: 'Lyft is an on-demand transportation company based in San Francisco, California.',
        image: Image3,
        title: 'Dell',
    },
    {
        id: 5,
        createdAt: '04/04/2019',
        description: 'GitHub is a web-based hosting service for version control of code using Git.',
        image: Image1,
        title: 'Charger',
    },
    {
        id: 6,
        createdAt: '04/04/2019',
        description: 'Squarespace provides software as a service for website building and hosting. Headquartered in NYC.',
        image: Image3,
        title: 'mmmm',
    }
];


const ProductList = () => {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };

    return (
        <>
            <Box
                sx={{
                    backgroundColor: 'background.default',
                    minHeight: '100%',
                    py: 3
                }}
            >
                <Container maxWidth={false}>
                    <ProductListToolbar clickHandler={handleClickOpen} title={"Add Product"} />
                    <Box sx={{ pt: 3 }}>
                        <Grid
                            container
                            spacing={3}
                        >
                            {products.map((product) => (
                                <Grid
                                    item
                                    key={product.id}
                                    lg={4}
                                    md={6}
                                    xs={12}
                                >
                                    <ProductCard data={product} onClick={handleClickOpen} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            pt: 3
                        }}
                    >
                    </Box>
                </Container>
            </Box>
            <DialogComponent selectedValue={selectedValue} open={open} onClose={handleClose} />
        </>
    )
}

export default ProductList;
