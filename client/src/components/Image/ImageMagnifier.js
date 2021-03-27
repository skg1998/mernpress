import React from 'react';
import {
    SideBySideMagnifier,
    MOUSE_ACTIVATION,
    TOUCH_ACTIVATION
} from "react-image-magnifiers";


const ImageMagnifier = (props) => {
    const { data } = props;
    console.log("data", data)
    return (
        <SideBySideMagnifier
            imageSrc={data}
            imageAlt="Example"
            mouseActivation={MOUSE_ACTIVATION.DOUBLE_CLICK} // Optional
            touchActivation={TOUCH_ACTIVATION.DOUBLE_TAP} // Optional
        />
    )
}

export default ImageMagnifier;