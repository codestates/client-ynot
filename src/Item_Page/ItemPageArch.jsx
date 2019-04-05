import React, { Component } from 'react';
import ItemPage from './Component/ItemPage';
import Header from './Component/Header';
import Footer from './Component/Footer';
import './ItemPageArch.css';

class ItemPageArch extends Component {
	render() {
		const { match } = this.props;
		console.log(match.params.itemId);
		return (
			<div className="">
				<div id="headCon">
					<Header />
				</div>
				<ItemPage id={match.params.itemId} />
				<Footer />
			</div>
		);
	}
}

export default ItemPageArch;
