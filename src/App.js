import React, { Component } from 'react';
import Cardlist from './Cardlist';
import SearchBox from "./SB";
import Scrol from "./scrol"
import "./App.css"
class App extends Component {
	constructor(){
		super()
		this.state ={
			robots: [],
			searchField: ''
		}
	}
componentDidMount(){
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then(user => this.setState({robots: user}))
}

onSearchChange = (event) =>{
	this.setState({searchField: event.target.value})
	
	}
	

	render(){
		const searchRobo = this.state.robots.filter(robots =>{
		return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
		});
		return(
		<div className="tc ">
			<h1>Robo_Friend</h1>
			<SearchBox serachChange = {this.onSearchChange}/>
			<Scrol>
				<Cardlist robots={searchRobo}/>
			</Scrol>
		</div>
		);
	}
	
}
export default App;