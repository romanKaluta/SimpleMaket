import React, { Component } from 'react';

class Modal extends Component {
	render() {
		const Modal = this.props.stateOpen && <div className="modal_sign">
				<div className="modal_sign_content">
					<span onClick={() => this.props.handleClickClose()}>X</span>
					<form action="" name="signIn">
						<input className="modal_content-email" name="email" type="email" defaultValue="hello@gmail.com" />
						<input className="modal_content-name" name="name" type="text" placeholder="Your name" />
						<input type="file" name="profileImg" className="modal_content-img" />
						<input className="modal_content-submit" type="submit" defaultValue="SUBMIT" />
					</form>
				</div>
			</div>
		return (
			<div>
			  {Modal}
			</div>
		);
	}
}

export default Modal;