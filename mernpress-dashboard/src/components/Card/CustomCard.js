import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


const ProductCard = (props) => {
    const { data } = props;

    return (
        <Card
            style={{ borderRadius: '20px', height: '100%' }}
        >
            <div className="image-container" style={{ height: '210px', width: '100px' }}>
                <img src={data.image} style={{ maxHeight: '100%', objectFit: 'cover' }} />
            </div>
            <CardContent>
                <div>{data.title}</div>
            </CardContent>
        </Card>
    )
}

ProductCard.propTypes = {
    data: PropTypes.object.isRequired
};

export default ProductCard;
