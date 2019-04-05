import React, { Component } from 'react';
import Search from '../../../Main_Page/Search';
import './Header.css';

export default class Header extends Component {
	render() {
		return (
			<div className="headerWrapper">
				<div id="hdImgWrap">
					<img src="https://www.yelpblog.com/wp-content/uploads/2018/08/logo.png" />
				</div>
				<div>
					<Search />
				</div>
				<div>
					<button>Log In</button>
					<button>Sign Up</button>
				</div>
			</div>
		);
	}
}
