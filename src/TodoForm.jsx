import { useState } from "react";
export const TodoForm = ({onAddTodo}) => {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) =>{
    setInputValue(event.target.value);
    }

    const handleFormChange = (event)=>{
        event.preventDefault();
        onAddTodo(inputValue);
        setInputValue("");
    }

    return (
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
    );
};