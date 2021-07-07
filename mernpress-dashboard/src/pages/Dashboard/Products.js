import React from "react";
import Product from '../../containers/Products/Product'
import globalStyles from "../../styles/styles";

const ProductsPage = () => {
    return (
        <>
            <div>
                <h3 style={globalStyles.navigation}>Application / Products</h3>
            </div>
            <Product />
        </>
    );
};

export default ProductsPage;