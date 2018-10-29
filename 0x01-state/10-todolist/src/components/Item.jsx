import React from 'react';
import PropTypes from 'prop-types';

export default class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {done:false};
   }

  clickEvent(event) {
    event.preventDefault();
    this.setState({done: !this.state.done})
  }

  
  render() {
    return (
      <li onClick={(e) => this.clickEvent(e)} className={this.state.done ? 'done':''}>
      {this.props.value}
      </li>
    );
  }
}

Item.propTypes = {value: PropTypes.string};
