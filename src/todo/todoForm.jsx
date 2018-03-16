import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => {

	const keyHandler = (e) => {
		if(e.key === 'Enter')
			e.shiftKey ? props.handleSearch() : props.handleAdd()
		else if(e.key === 'Escape')
			props.handleClear()
	}

	return (
		<div role='form' className='todoForm'>
			<Grid cols='12 9 10'>
				<input id='description' 
					onChange={props.handleChange}
					onKeyUp={keyHandler}
					value={props.description}
					className='form-control'
					placeholder='Add new task'>
				</input>
			</Grid>
			<Grid cols='12 3 2'>
				<IconButton style='primary' icon='plus' title='Add task' onClick={props.handleAdd}></IconButton>
				<IconButton style='info' icon='search' title='Search task' onClick={props.handleSearch}></IconButton>
				<IconButton style='default' icon='close' title='Cancel Search' onClick={props.handleClear}></IconButton>
			</Grid>
		</div>
	)
}