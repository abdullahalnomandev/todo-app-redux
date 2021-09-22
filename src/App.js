import React from 'react';
import './App.css'
import Input from './Components/Input/Input'
import Todo from './Components/Todo/Todo';

const App = () => {
  return (
    <div className="todo">
      <Input />
      <Todo />
    </div>
  );
};

export default App;