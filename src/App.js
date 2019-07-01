import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { toggleAnimation } from './actions/toggleAnimation';

class App extends Component {
  render() {
    console.log(this.props.rotation)
    return (
      <div className="App">
        <header className="App-header">
          <img 
            src={logo} 
            className={this.props.rotation ? "App-logo" : "App-logo App-logo-paused"} 
            alt="logo" 
            onClick={() => this.props.toggleAnimation(!this.props.rotation)}
            />
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  toggleAnimation: (payload) => dispatch(toggleAnimation(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
