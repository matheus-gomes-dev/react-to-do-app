import React from 'react'

import IconButton from '../template/iconButton'

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
        	
            <tr key={todo._id /*each array's element must have an unique key*/}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                	<IconButton 
                    	style='success' 
                    	icon='check'
                    	hide={todo.done}
                        title='Set task as done'
                    	onClick={
                    		() => props.handleMarkAsDone(todo) 
	                    	/*when working with parameteres that are not events, arrow function is a must!*/
	                    }>
                    </IconButton>
                    <IconButton 
                    	style='warning' 
                    	icon='undo' 
                    	hide={!todo.done}
                        title='Unset task as done'
                    	onClick={
                    		() => props.handleMarkAsPending(todo) 
	                    	/*when working with parameteres that are not events, arrow function is a must!*/
	                    }>
                    </IconButton>
                    <IconButton 
                    	style='danger' 
                    	icon='trash-o' 
                    	hide={!todo.done}
                        title='Delete task'
                    	onClick={
                    		() => props.handleRemove(todo) 
	                    	/*when working with parameteres that are not events, arrow function is a must!*/
	                    }>
                    </IconButton>
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Description</th>
                    <th className='tableActions'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}