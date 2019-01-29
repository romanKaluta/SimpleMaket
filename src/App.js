import React, { Component } from 'react';
import Header from './header/header';
import Modal from './header/modal';
import Main from './main/main';
import Footer from './footer/footer';

class App extends Component {
  state = {
    isOpen: false
  }
  render() {
    return (
      <div>
        <Modal stateOpen={this.state.isOpen} handleClickClose={this.handleClick} />
        <Header handleClickOpen={this.handleClick} />
        <Main />
        <Footer />
      </div>
    );
  }
  handleClick = () => this.setState(prev => ({isOpen: !prev.isOpen}))
}

export default App;
