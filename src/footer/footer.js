import React, { Component } from 'react';
import logoFooter from '../img/logo_footer.png';

class Footer extends Component {
	render() {
		return (
			<footer>
				<div className="footer_img"><img src={logoFooter} alt="#" /></div>
				<div className="footer_nav flex">
					<div className="footer_nav_item"><a href="#">ABOUT US</a></div>
					<div className="footer_nav_item"><a href="#">TERMS OF SERVICE</a></div>
					<div className="footer_nav_item"><a href="#">PRIVACY POLICY</a></div>
					<div className="footer_nav_item"><a href="#">CONTACT US</a></div>
				</div>
				<div className="footer_bottom">© 2018 Find Parrot</div>
			</footer>
		)
	}
}

export default Footer