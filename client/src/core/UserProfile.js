import React from 'react';
import {
    Box,
    Container,
    Grid
} from '@material-ui/core';

import Header from '../components/Navbars/Header'
import AccountProfile from '../components/Profile/AccountProfile';
import AccountProfileDetails from '../components/Profile/AccountProfileDetail';
import Footer from '../components/Footer/Footer'
import SEO from '../components/SEO/Seo';

const Profile = () => {
    return (
        <>
            <SEO />
            <Header />
            <Box
                sx={{
                    backgroundColor: 'background.default',
                    minHeight: '100%',
                    py: 3
                }}
                style={{ margin: '15px' }}
            >
                <Container maxWidth="lg">
                    <Grid
                        container
                        spacing={3}
                    >
                        <Grid
                            item
                            lg={4}
                            md={6}
                            xs={12}
                        >
                            <AccountProfile />
                        </Grid>
                        <Grid
                            item
                            lg={8}
                            md={6}
                            xs={12}
                        >
                            <AccountProfileDetails />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Footer />
        </>
    )
}

export default Profile;
