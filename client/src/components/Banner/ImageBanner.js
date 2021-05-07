import React from 'react';
import './grid.css';

const ImageBanner = (props) => {
    const { text, image, target_link } = props;
    return (
        <div className="container">
            <div className="content">
                <a href={target_link} target="_blank">
                    <div className="content-overlay"></div>
                    <img className="content-image" src={image} />
                    <div className="content-details fadeIn-top" >
                        <h3>{text} </h3>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default ImageBanner;