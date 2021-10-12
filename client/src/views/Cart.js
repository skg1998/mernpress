import React from "react";

import Cart from '../containers/cart/cart';
import SEO from '../components/SEO/Seo';

const CartView = () => {
    return (
        <React.Fragment>
            <SEO title="Cart - Mernpress " description="A Multi-vendor ecommerce site" />
            <div style={{ margin: '15px' }}>
                <Cart />
            </div>
        </React.Fragment>
    );
}

export default CartView;