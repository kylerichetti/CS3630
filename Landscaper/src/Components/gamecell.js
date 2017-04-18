import React from 'react'

class Cell extends React.Component{
	constructor(props){
		super(props);
		
		this.style = {
			width: props.masterWidth/props.sideCount + 'px',
			height: props.masterWidth/props.sideCount + 'px',
			margin: '0',
			padding: '0',
			float: 'left',
			backgroundColor: '#042',
			boxShadow: '0px 0px 3px #000'
		}
	
	console.log(props.sideCount)
	
		if(this.props.type.search("[tT]") > 0){
			this.style.backgroundColor = '#ccc';
		}
		else if(this.props.type.search("[bB]") > 0){
			this.style.backgroundColor = '#800080';
		}
}
	
	componentWillReceiveProps(nextProps){
		if(this.props.type[2] !== nextProps.type[2]){
			if(nextProps.type.search("[tT]") > 0){
				this.style.backgroundColor = "#ccc";
			}
			else if(nextProps.type.search("[bB]") > 0){
				this.style.backgroundColor = "#800080";
			}
			else if(nextProps.type.search("e") > 0){
				this.style.backgroundColor = "#042";
			}
		}
	}
	
	componentWillUpdate(nextProps){
		this.style.width = (nextProps.masterWidth/nextProps.sideCount) + 'px';
		this.style.height = (nextProps.masterWidth/nextProps.sideCount) + 'px';
	}
	
	render(){
		return(
			<div style={this.style} onClick={() => this.props.onClick()}></div>
		)
	}
}

export default Cell;