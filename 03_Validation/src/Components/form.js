import React from 'react';
import './form.css'

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			subName: '',
			phone: '',
			email: '',
			nameError: 'Required',
			phoneError: 'Required',
			emailError: 'Required'
			};

	this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }  
  
  handleInputChange(event) {
    const target = event.target;
	const value = target.value;
    const name = target.name;
	
	if(name === 'subName'){
		if(/^[a-zA-Z]+\s*[a-zA-Z]*$/.test(value)){
			this.setState({nameError: ""});
		}
		else{
			this.setState({nameError: "Invalid name"});
		}
	}
	else if(name === 'phone'){
		if(/^(?:\d{3}-?)?\d{3}-?\d{4}$/.test(value)){
			this.setState({phoneError: ""});
		}
		else{
			this.setState({phoneError: "Invalid phone number"});
		}
	}
	else if(name === 'email'){
		if(/^.+@\w+\.\w+$/.test(value)){
			this.setState({emailError: ""});
		}
		else{
			this.setState({emailError: "Invalid email address"});
		}
	}

    this.setState({
      [name]: value
    });
  }
  
  
  
  handleSubmit(event) {
    //alert('A name was submitted: ' + this.state.subName);
	if(this.state.nameError === '' && 
		this.state.phoneError === '' &&
		this.state.emailError === ''){
	}
	else{
		event.preventDefault();
	}
  }
  
  
  

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
			<label>
			Name:
			<input 
				name="subName"
				type="text" 
				value={this.state.subName} 
				onChange={this.handleInputChange} 
			/>
			</label>
			<div className="errorLabel">{this.state.nameError}</div>
		</p>
		
		<p>
			<label>
			Phone:
			<input 
				name="phone"
				type="text" 
				value={this.state.phone} 
				onChange={this.handleInputChange} 
			/>
			</label>
			<div className="errorLabel">{this.state.phoneError}</div>
		</p>
		
		<p>
			<label>
			Email:
			<input 
				name="email"
				type="text" 
				value={this.state.email} 
				onChange={this.handleInputChange} 
			/>
			</label>
			<div className="errorLabel">{this.state.emailError}</div>
		</p>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;