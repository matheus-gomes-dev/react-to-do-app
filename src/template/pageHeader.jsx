import React from 'react'

export default props => (
	<div>
	    <header className='page-header'>
	        <h2>{props.name}</h2>
	    </header>
	    <div>
	        {props.children}
	    </div>
	</div>
)