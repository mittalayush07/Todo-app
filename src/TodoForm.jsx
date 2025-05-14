import { useState } from "react";
export const TodoForm = ({onAddTodo}) => {
    const [inputValue, setInputValue] = useState({id: "", content: "", checked: false});

    const handleChange = (value) =>{
    setInputValue({id: value, content: value, checked: false});
    }

    const handleFormChange = (event)=>{
        event.preventDefault();
        onAddTodo(inputValue);
        setInputValue({id: "", content: "", checked: false});
    }

    return (
      <section className="form">
        <form onSubmit={handleFormChange}>
          <div>
            <input type="text" className="todo-input" autoComplete="off" value={inputValue.content} onChange={(event)=> handleChange(event.target.value)} />
          </div>
          <div>
            <button type='submit' className='todo-btn'>Add task</button>
          </div>
        </form>
      </section>
    );
};