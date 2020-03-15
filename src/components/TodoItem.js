import React, { Component } from 'react';

export default class TodoItem extends Component {
	render() {
		return (
			<li className="list-group-item text-capitalize d-flex justify-content-between my-2">
				<h6>title</h6>
				<div>
					<span className="text-success mx-2">
						<i className="fa fa-pencil"></i>
					</span>
					<span className="text-danger">
						<i className="fa fa-trash"></i>
					</span>
				</div>
			</li>
		);
	}
}
