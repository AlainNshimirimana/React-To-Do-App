import React, {useState} from 'react';
import './App.css';
//import components
import Form from './components/Form';
import TodoList from './components/ToDoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Alain's Todo List</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} setInputText={setInputText} inputText={inputText}></Form>

      <TodoList todos={todos}></TodoList>
    </div>
  );
}

export default App;
