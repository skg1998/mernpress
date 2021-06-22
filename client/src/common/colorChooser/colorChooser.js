import PropType from 'prop-types';
import React, { useState } from 'react';

const ColorChooser = (props) => {
    const { color, onSelectedColorChange } = props;
    console.log("color", color)
    const [selectedColor, setSelectedColor] = useState('');

    const setColor = (newcolor) => {
        setSelectedColor(newcolor);
        onSelectedColorChange(newcolor);
    };

    return (
        <div className="color-chooser">
            <div
                className={selectedColor === color ? 'color-item color-item-selected' : 'color-item'}
                key={color}
                onClick={() => setColor(color)}
                style={{ backgroundColor: color }}
                role="presentation"
            />
        </div>
    );
};

ColorChooser.propTypes = {
    availableColors: PropType.arrayOf(PropType.string).isRequired,
    onSelectedColorChange: PropType.func.isRequired
};

export default ColorChooser;