import { Button, Grid, TextField } from "@material-ui/core";
import { useState } from "react";
import { MaterialCard } from "./components/MaterialCard";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(['First fancy stuff todo']);
  const [input, setInput] = useState('');

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, input])
    setInput('');
  }

  const removeTodo = (index) => {
    console.log(`Removing the todo having index! ${index}`)
    todos.splice(index, 1);
    setTodos([...todos]);
  }

  return (
    <div className="App">
      <>
        {/* Input */}
        <p>Hello form Mirko!</p>
        <form>
          <label>
            <TextField label="Something new to do?" type="text" value={input} onChange={event => setInput(event.target.value)}/>
          </label>
          <Button type="submit" variant="outlined" color='primary' disabled={!input} onClick={addTodo}>Add todo</Button>
        </form>
      </>

      <>
        {/* List of todos */}
        <Grid container spacing={3} justify="center">
          <Grid item xs={12} ></Grid>
          {todos.map((todo, index) => { 
            const rndColor = Math.floor(Math.random()*16777215).toString(16);
            return <MaterialCard key={index} index={index} content={todo} rndColor={rndColor} removeTodo={() => removeTodo(index)}/>
          })}
        </Grid>

      </>
      
    </div>
  );
}

export default App;
