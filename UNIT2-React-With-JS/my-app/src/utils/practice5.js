import React, { Component } from 'react';

class LifecycleLogger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
        console.log('Constructor: Component is being constructed');
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps: Syncing state with props');
        return null;
    }

    componentDidMount() {
        console.log('componentDidMount: Component has mounted');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate: Should component update?');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate: Snapshot before update');
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate: Component has updated');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount: Component is about to unmount');
    }

    handleIncrement = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    };

    render() {
        console.log('render: Component is rendering');
        return (
            <div>
                <h1>React Component Lifecycle</h1>
                <p>Count: {this.state.count}</p>
                <button onClick={this.handleIncrement}>Increment</button>
            </div>
        );
    }
}

export default LifecycleLogger;