import { useEffect, useState } from 'react'
import './App.css';
import { MdCheck } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);
  const [dateTime, setDateTime] = useState("");

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

  useEffect(()=>{
      const interval = setInterval(()=>{
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();
      setDateTime(`${formattedDate} - ${formattedTime}`);
      }, 1000);
      return ()=> clearInterval(interval);
     }, []);
  
  const now = new Date();
  const formattedDate = now.toLocaleDateString();
  const formattedTime = now.toLocaleTimeString();
  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <h2 className='date-time'>{dateTime}</h2>
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
                <button className='check-btn'>
                  <MdCheck />
                </button>
                <button className='delete-btn'><MdDeleteForever /></button>
              </li>
            })
          }
        </ul>
      </section>
    </section>
  )
}

export default App
