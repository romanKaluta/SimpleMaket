import React, { Component } from 'react';
import all from '../../img/all.png';
import pointer from '../../img/pointer.png';

const serchArray = [
	{optionValue: "Cars"},
	{optionValue: "Cities"},
	{optionValue: "Arts"},
	{optionValue: "Films"}
]

class Search extends Component {
	render() {
		return (
			<section className="search">
				<h1 className="search_name">Quick Search for Your <span>Perfect Product</span></h1>
				<p className="search_info">INNOVATE • LIST • CONNECT</p>
				<div className="search_form">
					<form action="">
						<select name="Category" className="searching search-select"> 
							{serchArray.map((item, i) => (
								<option value="Category1" key={i}>{item.optionValue}</option>
							))}
						</select>
						<input type="text" className="searching search-input" />
						<input type="submit" value="START SEARCHING" className="searching search-button" />
					</form>
				</div>
				<div className="search_buttons flex">
					<div className="search_buttons-item flex">
						<img src={all} alt="#" />
						<div className="buttons-item-info">All categories</div>
					</div>
					<div className="search_buttons-item flex">
						<img src={pointer} alt="#" />
						<div className="buttons-item-info">How it works?</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Search