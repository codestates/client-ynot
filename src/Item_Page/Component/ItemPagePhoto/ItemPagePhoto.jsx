import React, { Component } from 'react';

export default class ItemPagePhoto extends Component {
	render() {
		return (
			<div>
				<img src={this.props.review.photo} />
			</div>
		);
	}
}
