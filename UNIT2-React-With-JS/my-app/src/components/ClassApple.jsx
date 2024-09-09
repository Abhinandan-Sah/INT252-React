import React from 'react';

class ClassApple extends React.Component {
    render() {
        // Access props directly in the render method
        const {fruitShop} = this.props;
        const {name, color}= fruitShop;

        return (
            <div>
                <h1>
                    This is a {name}, and its color is {color}.
                </h1>
            </div>
        );
    }
}

export default ClassApple;
