import React from 'react';
//import logo from './logo.svg';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types';

function Todos(props) {
    console.log("omer ki khansi");
    console.log(props.todos);

   // var markComplete = () => {
   //     console.log("hello");
   // };

    return props.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} delTodo={props.delTodo} markComplete={props.markComplete}/>
    ));
}

//HOST=localhost npm start’
//above line help to resolve npm start errors

// PropTypes -> used for type and validation, our todos component is expecting
// todos passed as attribute from parent/wrapping component. so we define it with
// type:array and expecting it to be required.
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}
export default Todos;
