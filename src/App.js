import React, { Component } from 'react';

//import logo from './logo.svg';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Todos from  './components/Todos';
import Header from  './components/layout/Header';
import AddTodo from  './components/AddTodo';
import About from  './components/pages/About';

import uuid from 'uuid';

import './App.css';


class App extends Component {
    state = {
        todos: [
            {
                id: uuid.v4(),
                title: 'take out trash',
                completed: false
            },
            {
                id: uuid.v4(),
                title: 'dinner with family',
                completed: false
            },
            {
                id: uuid.v4(),
                title: 'meeting with boss',
                completed: false
            },
        ]
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
        this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
        return id;
    };
    
    addTodo = (title) => {
        const newTodo = {
            title,
            id: uuid.v4(),
            completed: false
        };

        this.setState({todos: [...this.state.todos, newTodo]});


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
