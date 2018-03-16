import React from 'react'
import PageHeader from '../template/pageHeader'

export default props => (
	<div>
		<PageHeader name='About'>
			<p>
				Simple CRUD app built with REACT
				by <a href='https://www.linkedin.com/in/matheus-lima-923501a8/' target='_blanck'>Matheus Lima</a>
				, full stack software engineer.
			</p>
			<p>
				You can find more projects with REACT and other technologies on 
				my <a href='https://github.com/matheus-lima92' target='_blanck'>Github</a>
			</p>
		</PageHeader>
	</div>
)