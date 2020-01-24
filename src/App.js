import React, { Component } from 'react';

//import logo from './logo.svg';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Todos from  './components/Todos';
import Header from  './components/layout/Header';
import AddTodo from  './components/AddTodo';
import About from  './components/pages/About';
import axios from 'axios';

// import uuid from 'uuid';

import './App.css';


class App extends Component {
    state = {
        todos: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res => this.setState({todos: res.data}))
    }

    //Toggle complete
    markComplete = (id) => {
        console.log("hello = ", id);

        this.setState({todos: this.state.todos.map(todo => {
            if(todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        })});

    };

    delTodo = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }))
        ;
        return id;
    };
    
    addTodo = (title) => {
        const newTodo = {
            title,
            // id: uuid.v4(),
            completed: false
        };

        axios.post('https://jsonplaceholder.typicode.com/todos', {
            title,
            completed: false,
        }).then(res => this.setState({todos: [...this.state.todos, res.data]}));

    };

    render() {
        //console.log(this.state.todos)
        return(
                <Router>
                    <div className="App">
                    <div className="container">
                        <h1>najam</h1>
                        <Header />
                        <Route exact path="/" render={props => (
                            <React.Fragment>
                                <AddTodo addTodo={this.addTodo}/>
                                <Todos todos={this.state.todos} delTodo={this.delTodo} markComplete={this.markComplete} />       
                            </React.Fragment>
                        )}>

                        </Route>
                        <Route path='/about' component={About} />                        

                        
                    </div>
                    </div>
                </Router>
                
        );
    } 
}
export default App;
