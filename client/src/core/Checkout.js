import React from "react";

import Header from '../components/Navbars/Header'
import Checkout from '../containers/cart/Checkout'
import Footer from '../components/Footer/Footer'

import SEO from '../components/SEO/Seo';

const CheckoutView = (props) => {
    return (
        <React.Fragment>
            <SEO title="MernPress - Ecommerce site " description="A Multi-vendor ecommerce site" />
            <Header />
            <div style={{ margin: '15px' }}>
                <Checkout />
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default CheckoutView;