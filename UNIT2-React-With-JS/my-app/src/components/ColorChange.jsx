import React, { useState } from 'react';

const ColorChange = () => {
    const [color, setColor] = useState('red');

    const changeColor = () => {
        setColor('blue');
    };

    return (
        <div>
            <h1 style={{ color }}>{color}</h1>
            <button className='' onClick={changeColor}>Change Color</button>
        </div>
    );
};

export default ColorChange;