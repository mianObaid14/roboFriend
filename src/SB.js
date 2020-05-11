import React from 'react';

const SearchBox = ({serachChange}) =>{
	return (
		<div className="pa2">
			<input 
			className ='pa3 ba b--green bg-lightest-blue'
			type='search' 
			placeholder= 'Search Robo_Friends'
			onChange={serachChange} 
			/>
		</div>
	);
}


export default SearchBox;