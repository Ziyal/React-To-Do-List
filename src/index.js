import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import keyIndex from 'react-key-index';
import List from './components/list';
import AddItem from './components/add_item';

class App extends Component {
  constructor(props) {
    super(props);
    
    const nameOfDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    this.state = {
      // month, day, year, day of week
      date: [new Date().getMonth(), new Date().getDate(), new Date().getFullYear(), nameOfDay[new Date().getDay()]],
      list_items: [{id: 1, description: "Fold laundry", isChecked: false}, {id: 2, description: "Water plants", isChecked: true}, {id: 3, description: "Go grocery shopping", isChecked: false}],
      id_count: 4
    }

    // bind context
    this.updateList = this.updateList.bind(this);
    this.onCheckboxChange = this.onCheckboxChange.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  // adds new item to list
  updateList(item) {
    let list_items = this.state.list_items;
    let id_count = this.state.id_count;
    list_items.push({id: id_count, description: item, isChecked: false });
    id_count++;
    this.setState({list_items, id_count });
  }

  // updated isChecked state when checkbox is clicked
  onCheckboxChange(task) {
    let list_items = this.state.list_items;
    let index = list_items.findIndex(item => item.id === task.id);
    if(list_items[index].isChecked === true) {
      list_items[index].isChecked = false;
    } else {
      list_items[index].isChecked = true;
    }
    this.setState({list_items});
  }

  deleteTask(taskToDelete) {
    // let list_items = this.state.list_items;
    // let index = list_items.findIndex(task => task.id === taskToDelete.id);
    // list_items.splice(index, 1);
    // this.setState({list_items});   

    this.setState({list_items: this.state.list_items.filter(function(task) {
      return task.id !== taskToDelete.id
    })});

  }
  
  render() {
    const {date} = this.state;

    return (
      <div>
        {/*<h1 className="title">To-Do List</h1>*/}
        {/*<h2><Timestamp time={this.state.current_date[0]} format="date" /></h2>*/}
        <div className="header">
          <h2 className="day-name">{date[3]}</h2>
          <h2 className="date">{date[0] + 1}/{date[1]}/{date[2]}</h2>
        </div>


        <AddItem onFormSubmit={this.updateList}/>
        <hr />
        <div className="list-container">
          <List 
              list_items={this.state.list_items}
              onCheckboxChange={this.onCheckboxChange}
              deleteTask={this.deleteTask}
          />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));

