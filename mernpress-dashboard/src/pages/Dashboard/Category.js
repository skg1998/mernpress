import React from "react";
import globalStyles from "../../styles/styles";
import Category from "../../containers/Category/Categories";

const CategoryPage = () => {
    return (
        <div>
            <h3 style={globalStyles.navigation}>Application / Category</h3>
            <Category />
        </div>
    );
};

export default CategoryPage;