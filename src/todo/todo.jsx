import React, {Component} from 'react'
import axios from 'axios'
import config from '../config/config'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const API_URL = config.API_URL;

export default class Todo extends Component{

	constructor(props){
		super(props)
		this.state = {description: '', list: []}
		this.handleAdd = this.handleAdd.bind(this)
		this.handleChange = this.handleChange.bind(this)

	}

	handleChange(e) {
		this.setState({...this.state, description: e.target.value})
	}

	handleAdd() {
		const description = this.state.description
		axios.post(API_URL, {description}).then(resp => console.log('Added new item!'))
	}

	render(){
		return (
			<div>
				<PageHeader name='Tarefas' small="Cadastro"></PageHeader>
				<TodoForm 
					description={this.state.description} 
					handleChange={this.handleChange} 
					handleAdd={this.handleAdd}
				/>
				<TodoList />
			</div>
		)
	}
}