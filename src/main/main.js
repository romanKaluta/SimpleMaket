import React, { Component } from 'react';
import Search from './main_sections/search';
import Products from './main_sections/products';
import Tasks from './main_sections/tasks'

class Main extends Component {
	render() {
		return (
			<main>
				<Search />
				<Products />
				<Tasks />
			</main>
		)
	}
}

export default Main