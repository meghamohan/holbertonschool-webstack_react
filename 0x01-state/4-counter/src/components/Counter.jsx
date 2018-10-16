import React from 'react';
import PropTypes from 'prop-types';

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.initValue
        }
    }
    render() {
        return (
            <div>
                {this.state.value}
                <button onClick={(e) => this.handleClick(e)}>
                    New Value
                </button>
            </div>
        );
    }
    handleClick() {
        this.setState({value: 1000});
    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired
};

Counter.defaultProps =  {
    value: 0
};
