import React, { Component } from 'react';

export default class TodoItem extends Component {
	render() {
		const {title, handleDelete, handleEdit} = this.props
		return (
			<li className="list-group-item text-capitalize d-flex justify-content-between my-2">
				<h6>{title}</h6>
				<div>
					<span className="text-primary mx-2" onClick={handleEdit} style={{cursor: 'pointer'}}>
						<i className="fa fa-pencil"></i>
					</span>
					<span className="text-danger" onClick={handleDelete} style={{cursor: 'pointer'}}>
						<i className="fa fa-times"></i>
					</span>
				</div>
			</li>
		);
	}
}
