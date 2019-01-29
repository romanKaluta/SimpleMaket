import React, { Component } from 'react';
import prod1 from '../../img/prod1.png';
import prod2 from '../../img/prod2.png';
import prod3 from '../../img/prod3.png';
import prod4 from '../../img/prod4.png';
import prod5 from '../../img/prod5.png';
import prod6 from '../../img/prod6.png';

const productArray = [
	{name: "Hubstaff Directory", imagePath: require('../../img/prod1.png')},
	{name: "Jira 2017", imagePath: require('../../img/prod2.png')},
	{name: "Slack Pro", imagePath: require('../../img/prod3.png')},
	{name: "Trave Chat", imagePath: require('../../img/prod4.png')},
	{name: "Network", imagePath: require('../../img/prod5.png')},
	{name: "Time Camp", imagePath: require('../../img/prod6.png')}
]

class Products extends Component {
	render () {
		return (
			<section className="products">
				<div className="products_head">Most Popular Products</div>
				<div className="products_info">This is the list of products that are most interested in users</div>
				<div className="products_list flex"> 
					{productArray.map((item, i) => ( 
						<div className="products_list_item" key={i}>
							<img src={item.imagePath} alt="prod" />
							<p className="product_list_item-name">{item.name}</p>
						</div>
					))}
				</div>
				<a className="products_openAll" href="#">All products</a>
			</section>
		)
	}
}

export default Products