import React, { Component } from 'react'

export default class TodoInput extends Component {
	render() {
		return (
			<div className="card card-body text-center my-3">
				<form>
					<div className="input-group">
						<div className="input-group-prepend">
							<div className="input-group-text bg-primary text-white">
								<i className="fa fa-book"></i>
							</div>
						</div>
						<input type="text" className="form-control text capitalize" placeholder="add an item..."/>
					</div>
					<button type="submit" className="btn btn-primary mt-3">add item</button>
				</form>
			</div>
		)
	}
}