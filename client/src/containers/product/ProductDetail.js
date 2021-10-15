import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';

import { ReactComponent as IconStarFill } from "bootstrap-icons/icons/star-fill.svg";

import RatingsReviews from '../../components/Others/RatingsReviews';
import QuestionAnswer from '../../components/Others/QuestionAnswer';
import ShippingReturns from '../../components/Others/ShippingReturns';
import Details from '../../components/Others/Details';
import ImageMagnifier from '../../components/Image/ImageMagnifier';
import ProductAction from './ProductAction';

const data = {
    _id: "1",
    title: "Redmi Note 9 Pro Max",
    image: ["https://images-na.ssl-images-amazon.com/images/I/71usqWEJleL._SL1500_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/71usqWEJleL._SL1500_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/71usqWEJleL._SL1500_.jpg"
    ],
    description: "Country Of Origin - India 64MP quad rear camera with ultra-wide, macro mode, super macro, portrait, night mode, 960fps slowmotion, ai scene recognition, pro color, HDR, pro mode | 32MP front camera 16.94 centimeters (6.67 inch) FHD+ LCD multi-touch capacitive touchscreen, full screen dot display with 2400 x 1080 pixels resolution, 400 ppi pixel density and 20:9 aspect ratio | 2.5D curved glass",
    catalogs: "(Champagne Gold, 6GB RAM, 64GB Storage) - 64MP Quad Camera & Latest 8nm Snapdragon 720G & Alexa Hands-Free",
    variants: [
        {
            color: 'red',
            images: [
                "https://images-na.ssl-images-amazon.com/images/I/71usqWEJleL._SL1500_.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/71usqWEJleL._SL1500_.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/71usqWEJleL._SL1500_.jpg"
            ],
            sizes: [
                {
                    size: '4.5 inch',
                    available: 5,
                    sku: 'KS935FGH',
                    price: 10499
                },
                {
                    size: '5.5 inch',
                    available: 2,
                    sku: 'KS935FGH',
                    price: 10493
                }
            ]
        },
        {
            color: 'blue',
            images: [
                "https://images-na.ssl-images-amazon.com/images/I/71usqWEJleL._SL1500_.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/71usqWEJleL._SL1500_.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/71usqWEJleL._SL1500_.jpg"
            ],
            sizes: [
                {
                    size: '5.5 inch',
                    available: 5,
                    sku: 'KS935FGH',
                    price: 10499
                }
            ]
        }
    ],
    brand: "Redmi",
    requiredShipping: true,
    dateAvailable: "",
    condition: [],
    category: [],
    discount: [],
    shop: [],
    review: { rating: 4, totalreview: 445 },
    totalUserRating: 45,
    averageRating: '4.4',
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <div>{children}</div>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});


const ProductDetail = (props) => {
    const classes = useStyles();
    const [selectedColor, setSelectedColor] = useState('');
    const [varient, setVarient] = useState(0);
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className="container-fluid mt-3">
            <Grid container spacing={3}>
                <Grid item md={12}>
                    <Grid container spacing={3}>
                        <Grid item md={4}>
                            <Card >
                                <Grid container spacing={3}>
                                    <Grid item md={12} >
                                        <ImageMagnifier data={data.image[0]} />
                                    </Grid>
                                    <Grid item md={12}>
                                        <Grid container spacing={3}>
                                            {data && data.image.map((img, i) => (
                                                <Grid md={4} key={i}>
                                                    <Card style={{ width: "100px", height: "100px" }}>
                                                        <img src={img} style={{ backgroundSize: 'cover' }} />
                                                    </Card>
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                        <Grid item md={8}>
                            <Grid contianer spacing={3}>
                                <Card>
                                    <CardContent >
                                        <Grid item md={12}>
                                            <h1>
                                                {data.title}
                                            </h1>
                                            <Grid container spacing={3}>
                                                <Grid item md={12}>
                                                    <div className="mb-3">
                                                        <IconStarFill className="text-warning mr-1" />
                                                        <IconStarFill className="text-warning mr-1" />
                                                        <IconStarFill className="text-warning mr-1" />
                                                        <IconStarFill className="text-warning mr-1" />
                                                        <IconStarFill className="text-secondary mr-1" />|{" "}
                                                        <span className="text-muted small">
                                                            42 ratings and 4 reviews
                                                        </span>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item md={12}>
                                            <h3> Price: Price </h3>
                                        </Grid>
                                        <Grid item md={12}>
                                            <h3> Brand: {data.brand} </h3>
                                        </Grid>
                                        <Grid item md={12}>
                                            <h3> Available: Available </h3>
                                        </Grid>
                                        <Grid item md={12}>
                                            <h3> shop: shop </h3>
                                        </Grid>
                                        <Grid item md={12}>
                                            <Grid container spacing={3}>
                                                <h3> Color :
                                                    {data && data.variants.map((varient, i) => (
                                                        <span key={i}>
                                                            <colorChooser
                                                                color={varient.color}
                                                                onSelectedColorChange={varient.color}
                                                            />
                                                        </span>
                                                    ))}
                                                </h3>
                                            </Grid>
                                        </Grid>
                                        <Grid item md={12}>
                                            <Grid container spacing={3}>
                                                {data && data.variants[varient].sizes.map((size, i) => (
                                                    <Grid md={3}>
                                                        <Card style={{ margin: '10px' }}>
                                                            <CardContent>
                                                                <p> Price: {size.price} </p>
                                                                <p> Available: {size.available} </p>
                                                                <p> Size: {size.size} </p>
                                                                <p> Sku: {size.sku} </p>
                                                            </CardContent>
                                                        </Card>
                                                    </Grid>
                                                ))}
                                            </Grid>
                                        </Grid>
                                        <Grid item md={12}>
                                            <Grid container spacing={3}>
                                                <ProductAction />
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item md={12}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                                centered
                            >
                                <Tab label="Item One" {...a11yProps(0)} />
                                <Tab label="Item Two" {...a11yProps(1)} />
                                <Tab label="Item Three" {...a11yProps(2)} />
                                <Tab label="Item Three" {...a11yProps(4)} />
                            </Tabs>
                            <TabPanel value={value} index={0}>
                                <Details />
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                {Array.from({ length: 5 }, (_, key) => (
                                    <RatingsReviews key={key} />
                                ))}
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                {Array.from({ length: 5 }, (_, key) => (
                                    <QuestionAnswer key={key} />
                                ))}
                            </TabPanel>
                            <TabPanel value={value} index={3}>
                                <ShippingReturns />
                            </TabPanel>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default ProductDetail;