import React, { Component } from 'react';
import StarRating from '../StarRating';
import './ItemReviewDetails.css';

class ItemReviewDetails extends Component {
	render() {
		return (
			<div className="review">
				<div>
					<img src={this.props.review.user.profilePhoto} />
					<div>
						<span>{this.props.review.user.name}</span>
						<span>{this.props.review.district}</span>
					</div>
				</div>
				<div>
					<div>{this.props.review.averageRating}</div>
					<span>{this.props.review.date}</span>
					<p>{this.props.review.comment}</p>
					<div>
						<button>Useful</button>
						<button>Funny</button>
						<button>Cool</button>
					</div>
				</div>
			</div>
		);
	}
}

export default ItemReviewDetails;
