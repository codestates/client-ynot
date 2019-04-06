import React, { Component } from 'react';
import CategoryList from './CategoryList';
import Header from '../../Item_Page/Component/Header';
import Footer from '../../Item_Page/Component/Footer';
import './SearchPage.css';

class SearchPage extends Component {
	render() {
		console.log(this.props.match.params.location);
		return (
			<div>
				<div id="headCon">
					<Header />
				</div>
				<div id="cateCon">
					<CategoryList location={this.props.match.params.location} />
				</div>
				<Footer />
			</div>
		);
	}
}

export default SearchPage;
