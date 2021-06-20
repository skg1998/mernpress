import React from 'react';
import PropTypes from 'prop-types';
import {
    Avatar,
    Box,
    Card,
    CardContent,
    Divider,
    Grid,
    Typography
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import GetAppIcon from '@material-ui/icons/GetApp';

const ProductCard = ({ product, ...rest }) => {
    return (
        <Card
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
            }}
            {...rest}
        >
            <CardContent>
                <Box
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        pb: 3
                    }}
                >
                    <Avatar
                        alt="Product"
                        src={product.media}
                        variant="square"
                    />
                </Box>
                <Typography
                    align="center"
                    color="textPrimary"
                    gutterBottom
                    variant="h4"
                >
                    {product.title}
                </Typography>
                <Typography
                    align="center"
                    color="textPrimary"
                    variant="body1"
                >
                    {product.description}
                </Typography>
            </CardContent>
            <Box style={{ flexGrow: 1 }} />
            <Divider />
            <Box style={{ p: 2 }}>
                <Grid
                    container
                    spacing={2}
                    style={{ justifyContent: 'space-between' }}
                >
                    <Grid
                        item
                        style={{
                            alignItems: 'center',
                            display: 'flex'
                        }}
                    >
                        <AccessTimeIcon color="action" />
                        <Typography
                            color="textSecondary"
                            display="inline"
                            style={{ pl: 1 }}
                            variant="body2"
                        >
                            Updated 2hr ago
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        style={{
                            alignItems: 'center',
                            display: 'flex'
                        }}
                    >
                        <GetAppIcon color="action" />
                        <Typography
                            color="textSecondary"
                            display="inline"
                            style={{ pl: 1 }}
                            variant="body2"
                        >
                            {product.totalDownloads}
                            {' '}
                            Downloads
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Card>
    )
}

ProductCard.propTypes = {
    product: PropTypes.object.isRequired
};

export default ProductCard;
