import React from 'react';

const Form = ({inputText, setInputText, todos, setTodos}) => {
    //inputTextHandler that logs out what's been typed
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };

    //submit to do handler. Basically submit the input text
    const submitTodoHandler = (e) => {
      e.preventDefault();
      setTodos([
        ...todos, {text: inputText, completed: false, id: Math.random() * 1000},
      ]);
      // set input text to an empty string, this way the input field clears automatically when you submit the input text
      setInputText("");
    };

    return(
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    );
}

export default Form;