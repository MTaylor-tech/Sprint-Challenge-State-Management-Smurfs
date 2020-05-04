import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <header>
        <h1>Welcome to Smurf Village</h1>
        <nav>
             <Link to="/">Smurf List</Link> | <Link to="/add">Add a Smurf</Link>
       </nav>
    </header>
  );
}
