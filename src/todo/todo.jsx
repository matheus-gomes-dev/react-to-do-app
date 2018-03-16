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
		this.handleSearch = this.handleSearch.bind(this)
		this.handleClear = this.handleClear.bind(this)
		this.refresh()

	}

	refresh(description = '' /* ES6 feature Default Parameters */) {
		const search = description ? `&description__regex=/${description}/` : ''
		axios.get(`${API_URL}?sort=-createdAt${search}`)
			.then(resp => this.setState({...this.state, description, list: resp.data}))
	}

	handleSearch() {
		this.refresh(this.state.description)
	}

	handleChange(e) {
		this.setState({...this.state, description: e.target.value})
	}

	handleAdd() {
		const description = this.state.description
		axios.post(API_URL, {description}).then(resp => this.refresh())
	}

	handleRemove(todo){
		axios.delete(`${API_URL}/${todo._id}`).then(resp => this.refresh(this.state.description))
	}

	handleMarkAsDone(todo){
		axios.put(`${API_URL}/${todo._id}`, { ...todo, done: true }).then(resp => this.refresh(this.state.description))
	}

	handleMarkAsPending(todo){
		axios.put(`${API_URL}/${todo._id}`, { ...todo, done: false }).then(resp => this.refresh(this.state.description))
	}

	handleClear(){
		this.refresh()
	}

	render(){
		return (
			<div>
				<PageHeader name='Tarefas' small="Cadastro"></PageHeader>
				<TodoForm 
					description={this.state.description} 
					handleChange={this.handleChange} 
					handleAdd={this.handleAdd}
					handleSearch={this.handleSearch}
					handleClear={this.handleClear}
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