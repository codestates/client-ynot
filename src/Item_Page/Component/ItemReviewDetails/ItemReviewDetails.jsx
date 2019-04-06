import React, { Component } from 'react';
import StarRating from '../StarRating';
import './ItemReviewDetails.css';

class ItemReviewDetails extends Component {
	render() {
		const { user } = this.props.review;
		return (
			<div className="review">
				<div id="user">
					<div id="userImg">
						<img src={user.profilePhoto} id="userProf" />
					</div>
					<div id="userDtail">
						<a>{user.name}</a>
						<span>{this.props.review.district}</span>
					</div>
				</div>
				<div id="comment">
					<div>
						<p>{this.props.review.averageRating}</p>
						<span>
							{user.createdAt.slice(0, 4)} / {user.createdAt.slice(5, 7)} / {user.createdAt.slice(8, 10)}
						</span>
					</div>

					<p>{this.props.review.comment}</p>
					<div id="btnDiv">
						<button id="useBtn">Useful</button>
						<button id="funBtn">Funny</button>
						<button id="coolBtn">Cool</button>
					</div>
				</div>
			</div>
		);
	}
}

export default ItemReviewDetails;
