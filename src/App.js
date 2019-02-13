import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import './App.css';
import uuid from 'uuid';
import axios from 'axios';

class App extends Component {
    
    state = {
        todos: []
    }
    
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(res => this.setState({ todos: res.data }));
    }
    
    addTodo = (title) => {
        const newTodo = {
            title: title,
            completed: false,
        }
        
        axios.post('https://jsonplaceholder.typicode.com/todos', newTodo)
        .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
        
        //this.setState({ todos: [...this.state.todos, newTodo] });
    }
    
    markComplete = (id) => {
        this.setState({ todos: this.state.todos.map((todo) => {
            if(todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        }) });
    }
    
    deleteTodo = (id) => {
        //Using filter without spread operator
        /*let todos = this.state.todos.filter((todo) => {
            if(todo.id !== id) {
                return todo;
            }
        })
        this.setState({ todos: todos });*/
        
        //Using the spread operator
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res => this.setState({ todos: [...this.state.todos.filter((todo) => todo.id !== id)] }));
        
        //this.setState({ todos: [...this.state.todos.filter((todo) => todo.id !== id)] })
    }
    
    render() {
        return (
            <Router>    
                <div className="App">
                    <Header />
                    <div className="text-center mb-3">    
                        <Link to="/">Home</Link> | <Link to="/about">About</Link>
                    </div>
                    <Route exact path="/" render={props => (
                        <div className="row">
                            <div className="col-sm-6 offset-sm-3">
                                <AddTodo addTodo={ this.addTodo } />
                                <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
                            </div>
                        </div>
                    )} />
        
                    <Route path="/about" component={About} />
                    
                </div>
            </Router>
        );
  }
}

export default App;
