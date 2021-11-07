import React , {useContext} from 'react'
import { TodoContext } from '../context/TodoContext';

const Data = () => {
    const {todos} = useContext(TodoContext);
    const completedTodos = todos.filter(todo => todo.isCompleted === true);
    return todos.length ? (
            
            <span className='values'>
                you have {completedTodos.length} completed todos of {todos.length} total todos
            </span>
        ) : (
            <>
            </>
        );
}

export default Data;
