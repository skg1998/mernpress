import React from "react";

import Header from '../components/Navbars/Header'
import Cart from '../containers/cart/cart';
import Footer from '../components/Footer/Footer'
import SEO from '../components/SEO/Seo';

const CartView = () => {
    return (
        <React.Fragment>
            <SEO title="Cart - Mernpress " description="A Multi-vendor ecommerce site" />
            <Header />
            <div style={{ margin: '15px' }}>
                <Cart />
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default CartView;