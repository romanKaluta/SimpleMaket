import React, { Component } from 'react';
import logo from '../img/logo.png';

class Header extends Component {
	render () {
		return (
			  <header>
        	 <section className="header_menu flex">
         	  <div className="header_menu_logo">
            	<img src={logo} alt="#" />
          	  </div>
         	  <div className="header_menu_nav flex">
           		<div className="nav-item"><a href="#">ALL PRODUCTS</a></div>
            	<div className="nav-item"><a href="#">ABOUT US</a></div>
            	<div className="nav-item"><a href="#">LOG IN</a></div>
              <div className="nav-item nav-sign" onClick={() => this.props.handleClickOpen()}><a href="#">SIGN UP</a></div>
            </div>
	        </section>
	      </header>
		);
	}
}

export default Header;