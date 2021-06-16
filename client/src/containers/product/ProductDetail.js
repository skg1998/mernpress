import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';

import { ReactComponent as IconStarFill } from "bootstrap-icons/icons/star-fill.svg";

import RatingsReviews from '../../components/Others/RatingsReviews';
import QuestionAnswer from '../../components/Others/QuestionAnswer';
import ShippingReturns from '../../components/Others/ShippingReturns';
import Details from '../../components/Others/Details';

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
                            <img
                                src="../../images/products/tshirt_red_480x400.webp"
                                className="img-fluid mb-3"
                                alt=""
                            />
                            <img
                                src="../../images/products/tshirt_grey_480x400.webp"
                                className="border border-secondary mr-2" width="75"
                                alt="..."
                            />
                            <img
                                src="../../images/products/tshirt_black_480x400.webp"
                                className="border border-secondary mr-2" width="75"
                                alt="..."
                            />
                            <img
                                src="../../images/products/tshirt_green_480x400.webp"
                                className="border border-secondary mr-2" width="75"
                                alt="..."
                            />
                        </Grid>
                        <Grid item md={8}>
                            <h1 className="h5 d-inline mr-2">
                                Great product name goes here
                            </h1>
                            <span className="badge bg-success mr-2">New</span>
                            <span className="badge bg-danger mr-2">Hot</span>
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
                            <dl className="row small mb-3">
                                <dt className="col-sm-3">Availability</dt>
                                <dd className="col-sm-9">In stock</dd>
                                <dt className="col-sm-3">Sold by</dt>
                                <dd className="col-sm-9">Authorised Store</dd>
                                <dt className="col-sm-3">Size</dt>
                                <dd className="col-sm-9">
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="size"
                                            id="sizes"
                                            disabled
                                        />
                                        <label className="form-check-label" htmlFor="sizes">
                                            S
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="size"
                                            id="sizem"
                                            disabled
                                        />
                                        <label className="form-check-label" htmlFor="sizem">
                                            M
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="size"
                                            id="sizel"
                                        />
                                        <label className="form-check-label" htmlFor="sizel">
                                            L
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="size"
                                            id="sizexl"
                                        />
                                        <label className="form-check-label" htmlFor="sizexl">
                                            XL
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="size"
                                            id="sizexxl"
                                        />
                                        <label className="form-check-label" htmlFor="sizexxl">
                                            XXL
                                        </label>
                                    </div>
                                </dd>
                                <dt className="col-sm-3">Color</dt>
                                <dd className="col-sm-9">
                                    <button className="btn btn-sm btn-primary p-2 mr-2"></button>
                                    <button className="btn btn-sm btn-secondary p-2 mr-2"></button>
                                    <button className="btn btn-sm btn-success p-2 mr-2"></button>
                                    <button className="btn btn-sm btn-danger p-2 mr-2"></button>
                                    <button className="btn btn-sm btn-warning p-2 mr-2"></button>
                                    <button className="btn btn-sm btn-info p-2 mr-2"></button>
                                    <button className="btn btn-sm btn-dark p-2 mr-2"></button>
                                </dd>
                            </dl>

                            <div className="mb-3">
                                <span className="font-weight-bold h5 mr-2">$1900</span>
                                <del className="small text-muted mr-2">$2000</del>
                                <span className="rounded p-1 bg-warning  mr-2 small">
                                    -$100
                                </span>
                            </div>
                            <div>
                                <p className="font-weight-bold mb-2 small">
                                    Product Highlights
                                </p>
                                <ul className="small">
                                    <li>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </li>
                                    <li>Etiam ullamcorper nibh eget faucibus dictum.</li>
                                    <li>Cras consequat felis ut vulputate porttitor.</li>
                                </ul>
                            </div>
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