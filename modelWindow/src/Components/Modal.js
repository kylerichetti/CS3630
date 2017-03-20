import React from 'react';
import './Modal.css';

class Modal extends React.Component{
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick(){
		this.props.onToggle();
	}
	
	render(){
		return(
		
		<div className={!this.props.visible ? 'modal-closed' : ''}>
				<div className="modal-container">	
				</div>
				<div className="modal">
				
					<div className="modal-header">
						This is the popup
					</div>
					
					<div className="modal-body">
						{this.props.children}
					</div>
				
					<div className="modal-footer">
						<button onClick={this.handleClick} >
							Close
						</button>
					</div>
				
			</div>
	
		</div>
		
		);
	}
}

export default Modal;