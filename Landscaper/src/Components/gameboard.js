import React from 'react';
import './gameboard.css';
import Cell from './gamecell.js';
import {puzzleList} from './puzzles.js';

class Gameboard extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			gameCells: [],
			cellTypes: []
		};
		//Bind methods here
		this.genBoard = this.genBoard.bind(this);
	};
	
	genBoard(){
		var obj = JSON.parse(puzzleList[this.props.puzzle]);
		var NcellTypes = Array(obj.size*obj.size).fill('e')
		//this.setState({cellTypes: NcellTypes})
		
		for(var i = 0; i < obj.size; i++){
			var rowOfCells = []
			for(var k = 0; k < obj.size; k++){
				let cellLocation = 'row' + i + 'col' + k;
				rowOfCells[k] = <Cell id={cellLocation}></Cell>
			}
			this.state.gameCells.push(rowOfCells);
		}
		
		/*for( var cell in obj){
			if(cell !== 'size'){
				var current = obj[cell];
				console.log(cell + ' : ' + current)
				var x = current[0];
				var y = current[1];
				var cellType = current[2];
				
				if(cellType === "t"){
					//Tree
					//console.log(this.state.gameCells[x][y])
					var arrayVar = this.state.gameCells;
					var stateCell = arrayVar[x][y];
					console.log(stateCell)
					
					//stateCell.type = 'tree';
					
					//this.setState({gameCells[x][y]: 'tree'})
				}
				else if(cellType === 'b'){
					//Bush
					//this.setState({gameCells[x][y]: 'bush'})
				}
			
			}
		}
		*/
		return this.state.gameCells;
	}
	
	render(){
		return( 
			<div id="board">
				{this.genBoard()}
			</div>
		)
	};
}

export default Gameboard;