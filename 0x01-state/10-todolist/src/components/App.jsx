import React from 'react';
import Item from './Item.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ["Read documentation",
              "Do the tutorial",
              "Add comment"],
      inputValue: ""
    };
  }

  clickEvent() {
    this.setState({value: this.state.inputValue});
  }

  updateEvent(event) {
    this.setState({inputValue: event.target.value});
  }

  addListEvent(event) {
    event.preventDefault();
    this.setState({items: [...this.state.items, this.state.inputValue],
      inputValue: ''});
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.addListEvent(e)}>
          <h1>Todo list</h1>
          New:
          <input type="text" onChange={(e) => this.updateEvent(e)} />
          <input type="submit" value="Add" />
        </form>
        <ul>
          {this.state.items.map((item, i) =>
            <Item key={i} value={item} />
          )}
        </ul>
      </div>);
  }
}
