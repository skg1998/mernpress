import React from 'react';

import CategoryContainer from '../containers/Category/category'
import SEO from '../components/SEO/Seo';

const Categories = () => {
   return (
      <>
         <SEO title="Categories" description="All categories" />
         <div className="categories">
            <CategoryContainer />
         </div>
      </>
   )
}

export default Categories;