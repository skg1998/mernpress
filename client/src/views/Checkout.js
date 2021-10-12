import React from "react";

import Checkout from '../containers/cart/Checkout'
import SEO from '../components/SEO/Seo';

const CheckoutView = () => {
    return (
        <React.Fragment>
            <SEO title="Checkout" description="A Multi-vendor ecommerce site" />
            <div style={{ margin: '15px' }}>
                <Checkout />
            </div>
        </React.Fragment>
    );
}

export default CheckoutView;