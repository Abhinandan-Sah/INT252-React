import React, { useState, useEffect } from 'react';

const WindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>

            <h3>Window Width</h3>
            <p>{windowWidth}px</p>
        </div>
    );
};

export default WindowWidth;