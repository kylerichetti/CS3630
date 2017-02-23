import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router'

class App extends Component {
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
			<li><Link to="/about" activeClassName="active">About</Link></li>
			<li><Link to="/repos" activeClassName="active">Repos</Link></li>
        </ul>

        {/* add this */}
        {this.props.children}

      </div>
	  )
}
}

export default App;
