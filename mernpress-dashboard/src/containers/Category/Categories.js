import React from 'react';
import { v4 as uuid } from 'uuid';
import {
    Box,
    Container,
    Grid
} from '@material-ui/core';

import DialogComponent from './CategoryDailog';
import ListToolbar from '../../components/Card/CardToolBox';
import CategoryCard from '../../components/Card/CustomCard';

//image
import Image1 from '../../assets/img/product_1.jpg'
import Image3 from '../../assets/img/product_3.jpg'

const categories = [
    {
        id: uuid(),
        createdAt: '27/03/2019',
        description: 'Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.',
        image: Image1,
        title: 'Sport Shoes',
        totalDownloads: '594'
    },
    {
        id: uuid(),
        createdAt: '31/03/2019',
        description: 'Medium is an online publishing platform developed by Evan Williams, and launched in August 2012.',
        image: Image3,
        title: 'Redmi 7',
    },
    {
        id: uuid(),
        createdAt: '03/04/2019',
        description: 'Slack is a cloud-based set of team collaboration tools and services, founded by Stewart Butterfield.',
        image: Image1,
        title: 'Men Shirt',
    },
    {
        id: uuid(),
        createdAt: '04/04/2019',
        description: 'Lyft is an on-demand transportation company based in San Francisco, California.',
        image: Image3,
        title: 'Dell',
    },
    {
        id: uuid(),
        createdAt: '04/04/2019',
        description: 'GitHub is a web-based hosting service for version control of code using Git.',
        image: Image1,
        title: 'Charger',
    },
    {
        id: uuid(),
        createdAt: '04/04/2019',
        description: 'Squarespace provides software as a service for website building and hosting. Headquartered in NYC.',
        image: Image3,
        title: 'mmmm',
    }
];


const CategoryList = () => {
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
                    <ListToolbar clickHandler={handleClickOpen} title={"Add Category"} />
                    <Box sx={{ pt: 3 }}>
                        <Grid
                            container
                            spacing={3}
                        >
                            {categories.map((category) => (
                                <Grid
                                    item
                                    key={category.id}
                                    lg={4}
                                    md={6}
                                    xs={12}
                                >
                                    <CategoryCard data={category} onClick={handleClickOpen} />
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

export default CategoryList;
