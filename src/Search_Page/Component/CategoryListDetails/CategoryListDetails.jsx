import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryListDetails.css';

const CategoryListDetails = (props) => (
	<div className="ItemWrapper">
		<img src={props.item.src} className="itemImg" />
		<div className="itemInfo">
			<div id="details">
				<div>
					<Link to={`/item/${props.item.id}`}>
						<p id="cateTitle">{props.item.name}</p>
					</Link>
					<div>{props.item.averageRating}</div>
					<p>$$ British, Fish & Chips, Seafood</p>
				</div>
				<div>
					<p>02-222-2222</p>
					<p>{props.item.address}</p>
					<p>이게 뭐지???</p>
				</div>
			</div>
			<div>
				<p>It is a cute little place up on the hill.</p>
			</div>
			<div>
				<button id="findTable">Find a Table</button>
				<span>Offers reservatios</span>
			</div>
		</div>
	</div>
);

export default CategoryListDetails;
