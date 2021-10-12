import React from 'react';
import SEO from '../components/SEO/Seo';
import Notfound from '../assets/img/error-404.svg';

const NotFound = () => (
    <div>
        <SEO title="Error 404: Route not found" description="A Multi-vendor ecommerce site" />
        <img src={Notfound} style={{ width: '100%', height: "100%" }} />
    </div>
);

export default NotFound;