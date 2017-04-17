import React from 'react';
import Gameboard from './gameboard.js';
import './puzzles.js';

class Game extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			puzzle: '0'
		}
	}
	render(){
		return(
			<div id="gameWrapper">
				<Gameboard puzzle={this.state.puzzle}>
				</Gameboard>
				<div id="puzzleControls">
					<button name="previous">Previous</button>
					<button name="next">Next</button>
				</div>
			</div>
		)
	}
}

export default Game