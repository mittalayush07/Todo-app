import { useState } from 'react'
import './App.css';

import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { Tododate } from './Tododate';

function App() {
  const [task, setTask] = useState(()=>{
    const rawTodos = localStorage.getItem("todolocal");
    if(!rawTodos) return [];
    
    return JSON.parse(rawTodos);
  });
  
  const handleFormChange = (inputValue) =>{
    const {id, content, checked} = inputValue;
    if(!content) return;
    const ifTodoContentMatched = task.find((curTask) => curTask.content === content);
    if(ifTodoContentMatched) return;

    setTask((prev) => [...prev, {id: id, content: content, checked: checked}]);
  }
  localStorage.setItem("todolocal", JSON.stringify(task));


     // handling the delete button
     const handleDelete = (value)=>{
      const updatedTask = task.filter((curTask)=> curTask.content !== value);
      setTask(updatedTask);          
     }

     //handling the checked button
     const handleChecked = (value)=>{
      const updatedCheck = task.map((curTask)=>{
        if(curTask.content===value){
          return {
            ...curTask, checked: !curTask.checked
          };
        }
        else{
          return curTask;
        }
      })
      setTask(updatedCheck);
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
            task.map((curTask) => {
              return (
                <TodoList key={curTask.id} data={curTask.content} checked = {curTask.checked}  onHandleDeleteTodo = {handleDelete} onHandleCheckedTodo = {handleChecked}/>
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
