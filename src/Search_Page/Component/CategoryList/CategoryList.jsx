import React, { Component } from 'react';
import CategoryListDetails from '../CategoryListDetails';
import './CategoryList.css';

class CategoryList extends Component {
	constructor() {
		super();
		this.state = {
			restaurant: [],
			currentPage: 1,
			itemsPerPage: 6
		};

		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		fetch(`http://localhost:3002/api/restaurants/nearby?district=${this.props.location}`)
			.then((res) => res.json())
			.then((json) => {
				console.log(json);
				this.setState({
					restaurant: json
				});
			})
			.catch((err) => {
				console.error(err);
			});
	}

	handleClick(event) {
		this.setState({
			currentPage: Number(event.target.id)
		});
	}

	render() {
		const { restaurant, currentPage, itemsPerPage } = this.state;

		const indexOfLastItem = currentPage * itemsPerPage;
		const indexOfFirstItem = indexOfLastItem - itemsPerPage;
		const currentItems = restaurant.slice(indexOfFirstItem, indexOfLastItem);

		const renderItems = currentItems.map((item, index) => {
			console.log(item);
			return (
				<div id="categoryListWrapper">
					<CategoryListDetails key={index} item={item} />
				</div>
			);
		});

		const pageNumbers = [];
		for (var i = 1; i <= Math.ceil(restaurant.length / itemsPerPage); i++) {
			pageNumbers.push(i);
		}

		const renderPageNumbers = pageNumbers.map((number) => {
			return (
				<button id={number} onClick={this.handleClick}>
					{number}
				</button>
			);
		});

		return (
			<div class="listWrapper">
				{renderItems}
				{renderPageNumbers}
			</div>
		);
	}
}

export default CategoryList;
