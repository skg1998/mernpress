import React from 'react';
import ImageGallery from '../../components/Image/imageGallery'


const ProductDetail = (props) => {
    const { data } = props;
    return (
        <div>
            <ImageGallery />
        </div>
    )
}

export default ProductDetail;