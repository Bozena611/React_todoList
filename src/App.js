import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import uuid  from 'react-uuid';

class App extends Component {
  state = {
    id: uuid(), //check uuid() not working
    item: "",
    items: [],
    editItem: false
  }
  handleChange = (e) => {
    this.setState({
      item: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()

    const newItem = {
      id: this.state.id,
      title: this.state.item
    }

    const updatedItems = [...this.state.items, newItem]
  
    this.setState({
      id: uuid(),
      items: updatedItems,
      item: '',
      editItem: false
    })
  }
  clearList =() => {
    this.setState({
      items:[]
    })
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-4">
              <h3 className="text-capitalize text-center">todo input</h3>
              <TodoInput
                item={this.state.item} 
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
               />
              <TodoList 
                items={this.state.items}
                clearList={this.clearList}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
