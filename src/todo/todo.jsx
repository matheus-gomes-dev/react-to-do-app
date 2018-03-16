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
		this.handleRemove = this.handleRemove.bind(this)
		this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
		this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
		this.refresh()

	}

	refresh() {
		axios.get(`${API_URL}?sort=-createdAt`)
			.then(resp => this.setState({...this.state, description: '', list: resp.data}))
	}

	handleChange(e) {
		this.setState({...this.state, description: e.target.value})
	}

	handleAdd() {
		const description = this.state.description
		axios.post(API_URL, {description}).then(resp => this.refresh())
	}

	handleRemove(todo){
		console.log("!!!!!!!");
		axios.delete(`${API_URL}/${todo._id}`).then(resp => this.refresh())
	}

	handleMarkAsDone(todo){
		axios.put(`${API_URL}/${todo._id}`, { ...todo, done: true }).then(resp => this.refresh())
	}

	handleMarkAsPending(todo){
		axios.put(`${API_URL}/${todo._id}`, { ...todo, done: false }).then(resp => this.refresh())
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
				<TodoList 
					list={this.state.list} 
					handleRemove={this.handleRemove}
					handleMarkAsPending={this.handleMarkAsPending}
					handleMarkAsDone={this.handleMarkAsDone}
				/>
			</div>
		)
	}
}