import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(['first stuff todo']);
  const [input, setInput] = useState('');

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, input])
    setInput('');
    
  }

  return (
    <div className="App">
      <>
        {/* Input */}
        <p>Hello form Mirko!</p>
        <form>
          <label>
            <input type="text" placeholder={"Something new to do?"} value={input} onChange={event => setInput(event.target.value)}/>
          </label>
          <button type="submit" onClick={addTodo}>Add todo</button>
        </form>
      </>

      <>
        {/* List of todos */}
        <ul>
          {todos.map(todo => (
            <li>{todo}</li>
          ))}
        </ul>
      </>
    </div>
  );
}

export default App;
