import { useState } from 'react'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);

  const handleChange = (event) =>{
    setInputValue(event.target.value);
  }
  const handleFormChange = (event) =>{
    event.preventDefault();

    if(!inputValue) return;

    if(task.includes(inputValue)){
      setInputValue("");
      return;
    }

    setTask((prev) => [...prev, inputValue]);
    setInputValue("");
  }
  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>        
      </header>
      <section className="form">
        <form onSubmit={handleFormChange}>
          <div>
            <input type="text" className="todo-input" autoComplete="off" value={inputValue} onChange={handleChange} />
          </div>
          <div>
            <button type='submit' className='todo-btn'>Add task</button>
          </div>
        </form>
      </section>
      <section className='myUnordList'>
        <ul>
          {
            task.map((curTask, index) => {
              return <li key={index} className='todo-item'>
                <span>{curTask}</span>
              </li>
            })
          }
        </ul>
      </section>
    </section>
  )
}

export default App
