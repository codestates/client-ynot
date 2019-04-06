import React, { Component } from 'react';
import './ItemPagePhoto.css';

export default class ItemPagePhoto extends Component {
	render() {
		return (
			<div id="revPhoWrapper">
				<img src={this.props.review.photo} className="revPho" id="Aphoto" />
				<img
					src="http://img.vogue.co.kr/vogue/2015/04/style_555476ab93972.jpg"
					className="revPho"
					id="Bphoto"
				/>
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjHRqp9Tdp2ROmTVTJnZIUiRHveN-UgTJNZvSOcaEx4IxNKmIz"
					className="revPho"
					id="Cphoto"
				/>
			</div>
		);
	}
}
