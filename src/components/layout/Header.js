import React from 'react';
import {Link} from 'react-router-dom';
//import logo from './logo.svg';
// import PropTypes from 'prop-types';




function Header() {
    return(<header style={headerStyle}>
        <h1>Todo List</h1>
        <Link to="/" style={linkStyle}>Home</Link> | <Link to="/about" style={linkStyle}>About</Link>
    </header>);
}

//HOST=localhost npm start’
//above line help to resolve npm start errors


// PropTypes -> used for type and validation, our todos component is expecting
// todos passed as attribute from parent/wrapping component. so we define it with
// type:array and expecting it to be required.
const headerStyle = {
    background: '#333',
    color: '#fff',
    padding: '10px',
    textAlign: 'center'
};

const linkStyle = {
    textDecoration: 'none',
    color:'#fff'
}
export default Header;

