import React from 'react';

const Scrol = (props) =>{
	return(
		<div style={{ overflow: 'scroll', border: '0px solid black', height : '800px'}}>
			{props.children}
		</div>
	);
}


export default Scrol;