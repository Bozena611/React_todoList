import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
	render() {
		return (
			
			<ul className="list-group text-center my-5">
				<h3 className="text-capitalize text-center">todo List</h3>
				<TodoItem/>
				<button className="btn btn-danger text-capitalize mt-5">clear list</button>
			</ul>
			
		);
	}
}
