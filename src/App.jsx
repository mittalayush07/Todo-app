import { useState } from 'react'
import './App.css';

import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { Tododate } from './Tododate';

function App() {
  const [task, setTask] = useState([]);
  
  const handleFormChange = (inputValue) =>{
    if(!inputValue) return;

    if(task.includes(inputValue)){
      return;
    }

    setTask((prev) => [...prev, inputValue]);
  }


     // handling the delete button
     const handleDelete = (value)=>{
      const updatedTask = task.filter((curTask)=> curTask!== value);
      setTask(updatedTask);          
     }

     // handling clear all button
     const handleClearAll = ()=>{
      setTask([]);
     }
  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1> 
        <Tododate />
      </header>
      <TodoForm onAddTodo = {handleFormChange}/>
      <section className='myUnordList'>
        <ul>
          {
            task.map((curTask, index) => {
              return (
                <TodoList key={index} data={curTask} onHandleDeleteTodo = {handleDelete}/>
              );
            })
          }
        </ul>
      </section>
      <section>
        <button className='clear-btn' onClick={handleClearAll}>Clear All</button>
      </section>

    </section>
  )
}

export default App
