import React from 'react';
import SEO from '../components/SEO/Seo';
import Header from '../components/Navbars/Header';
import Footer from '../components/Footer/Footer';

const Categories = () => {
   return (
      <>
         <SEO title="Categories" description="All categories" />
         <Header />
         <div className="categories"></div>
         <Footer />
      </>
   )
}

export default Categories;