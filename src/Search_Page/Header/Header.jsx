import React, { Component } from 'react';
import Search from '../../Search';
import './Header.css';

export default class Header extends Component {
	render() {
		return (
			<div className="headerWrapper">
				<div id="hdImgWrap">
					<img src="https://www.yelpblog.com/wp-content/uploads/2018/08/logo.png" />
				</div>
				<div id="searchCon">
					<Search />
				</div>
				<div id="userBtn">
					<button id="login">Log In</button>
					<button id="signup">Sign Up</button>
				</div>
			</div>
		);
	}
}
