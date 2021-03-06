import React from 'react';
import PropTypes from 'prop-types';

export default class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            value:89
        }
    }
    render() {
        return (
            <div>{this.state.value}</div>
        );
    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired
};

Counter.defaultProps =  {
    value: 0
};
