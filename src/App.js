import React from 'react';
//import logo from './logo.svg';
import './App.css';
import todosData from './todosData'
import TodoItems from './TodoItems'

function App() {
  
  const TodoComp = todosData.map(myItems => <TodoItems key={myItems.id} myItems={myItems}/>)
  return (
    <div>
        <h1>React test</h1> 
        {TodoComp}
    </div>
  );
}

export default App;
