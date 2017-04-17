import React from 'react'

class Cell extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			type: 'empty'
		}
		
		this.style = {
			width: '100px',
			height:'100px',
			margin: '0',
			padding: '0',
			float: 'left',
			backgroundColor: '#042',
			boxShadow: '0px 0px 3px #000'
		}
	
		if(this.state.type === 'tree'){
			this.style.backgroundColor = '#007';
		}
		else if(this.state.type === 'bush'){
			this.style.backgroundColor = '#700';
		}
		
		//Bind cycle function
		this.cycle = this.cycle.bind(this);	
}

cycle(event){
	if(this.state.type === 'empty'){
		this.setState({type: "tree"});
		this.style.backgroundColor = '#007';
	}
	else if(this.state.type === 'tree'){
		this.setState({type: "bush"});
		this.style.backgroundColor = '#700';
	}
	else if(this.state.type === 'bush'){
		this.setState({type: "empty"});
		this.style.backgroundColor = '#042';
	}
}
	
	
	render(){
		return(
			<div style={this.style} onClick={this.cycle}></div>
		)
	}
}

export default Cell;