import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StarRating from '../StarRating/StarRating';
import ItemMap from '../ItemMap';
import ItemReview from '../ItemReview';
import ItemPagePhoto from '../ItemPagePhoto/ItemPagePhoto';
import './ItemPage.css';

class ItemPage extends Component {
	constructor() {
		super();
		this.state = {
			review: null,
			star: null
		};
	}

	componentDidMount() {
		fetch(`http://localhost:3002/api/restaurants/infoabout?id=${this.props.id}`)
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					review: json
				});
				console.log(json);
			});
	}

	render() {
		const { review } = this.state;
		return review !== null ? (
			<div id="ItemPgWrapper">
				<div id="ItemPgHeader">
					<div id="IPHtitle">
						<h1>{review.restaurant.name}</h1>
						<div>
							<StarRating />
						</div>
						<a href="#">food styles</a>
					</div>
					<div className="btnWrapper">
						<Link to={`/review/${this.props.id}`}>
							<button id="wrBtn">★Write a Review</button>
						</Link>
						<button id="addPhoto">+Add Photo</button>
					</div>
				</div>
				<div id="mapAndPhoto">
					<div id="mapWrapper">
						<ItemMap />
					</div>
					<ItemPagePhoto review={review} />
				</div>
				<div>
					<div id="revHeader">
						<div id="hTag">
							<h3 id="revH1">Recommended Reviews </h3>
							<h3 id="h3"> for {review.restaurant.name}</h3>
						</div>
						<div id="searchAndSort">
							<input id="revSearch" placeholder="Search within the reviews" />
							<button id="revSearchBtn">검색</button>
							<div id="sortBox">
								<span>Sort by</span>
								<select id="sel1">
									<option>Yelp Sort</option>
									<option>Yelp Sort</option>
									<option>Yelp Sort</option>
									<option>Yelp Sort</option>
								</select>
								<span id="sortLan">Language</span>
								<select id="sel2">
									<option>Korean</option>
									<option>English</option>
								</select>
							</div>
						</div>
					</div>
					<ItemReview id={review.restaurant.id} />
				</div>
			</div>
		) : null;
	}
}

export default ItemPage;
