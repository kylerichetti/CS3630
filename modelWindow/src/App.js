import React, { Component } from 'react';
import logo from './logo.svg';
import Modal from './Components/Modal.js'
import ContactForm from './Components/form.js'
import './App.css';


class App extends Component {
	constructor(props){
		super(props);
		
		this.state = {
			modalOpen: false
		};
		this.toggleOpen = this.toggleOpen.bind(this);
	}
	
	
	toggleOpen(){
		this.setState( state =>({
			modalOpen: !state.modalOpen
		}));
	}
	
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
		
		<button onClick={this.toggleOpen}>
			Open Modal
		</button>
		
		<Modal 
			visible={this.state.modalOpen}
			onToggle={this.toggleOpen}d
			>
			<h1>Hello World</h1>
		</Modal>
		
		<ContactForm>
		
		</ContactForm>
		
      </div>
    );
  }
}

export default App;
