import { MdCheck } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
export const TodoList = ({data, checked, onHandleDeleteTodo, onHandleCheckedTodo})=>{
    return (
        <li className='todo-item'>
                        <span className={checked? "checkList" : "notChecklist"}>{data}</span>
                        <button className='check-btn' onClick={()=> onHandleCheckedTodo(data)}>
                          <MdCheck />
                        </button>
                        <button className='delete-btn' onClick={()=> onHandleDeleteTodo(data)}><MdDeleteForever /></button>
        </li>
    )
}