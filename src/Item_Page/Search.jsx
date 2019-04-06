import React from 'react';
import { Link } from 'react-router-dom';
import './Search.css';

function Search({ onChange, onClick, onKeyPress, searchInput }) {
	return (
		<div id="searchBox">
			<input onChange={onChange} onKeyPress={onKeyPress} id="searchInput" />
			<Link to={`/search/${searchInput}`}>
				<button onClick={onClick} id="searchBtn">
					Search
				</button>
			</Link>
		</div>
	);
}

export default Search;
