import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import List from './components/list';
import AddItem from './components/add_item';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list_items: [{description: "Fold laundry", status: false}, {description: "Go grocery shopping", status: false}]
    }

  }

  render() {
    return (
      <div>
        <h1>To-Do List</h1>
        <AddItem />
        <List list_items={this.state.list_items}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));

