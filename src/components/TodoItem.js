
import React from 'react';
//import logo from './logo.svg';
import PropTypes from 'prop-types';




function TodoItem(props) {


    var getStyle = () => {
        console.log("title:", props.todo.title);
        console.log("completed:", props.todo.completed);


        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: props.todo.completed ? 'line-through' : 'none'
        };
    };


   // var markComplete = (e) => {
   //     console.log(props);

   //     props.todo.completed = props.todo.completed ? false : true;
   // };

    const {id, title} = props.todo;

    //console.log(props.todos);
    return (
            <div style={getStyle()}>
            <p>
            <input type="checkbox" onChange={props.markComplete.bind(this, id)} />
            {title}
            <button style={btnStyle} onClick={props.delTodo.bind(this, id)}>x</button>
        </p>
            </div>
    );
}

//HOST=localhost npm start’
//above line help to resolve npm start errors


// PropTypes -> used for type and validation, our todos component is expecting
// todos passed as attribute from parent/wrapping component. so we define it with
// type:array and expecting it to be required.
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
};

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    padding: '5px 10px',
    borderRadius: '50%',
                 };


export default TodoItem;
