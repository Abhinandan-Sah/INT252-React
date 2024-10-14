import React from 'react';

class ColorChangeComp extends React.Component {
    constructor() {
        super();
        this.state = {
            color: 'red'
        };
        this.changeColor = this.changeColor.bind(this);
    }
    
    changeColor() {
        this.setState({ color: 'blue' });
    }

    render() {
        return (
            <div>
                <h1 style={{color: this.state.color }}>{this.state.color}</h1>
                <button className='change-color-button' onClick={this.changeColor}>Change Color</button>
            </div>
        );
    }
}

export default ColorChangeComp;