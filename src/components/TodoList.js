import React , {useContext} from 'react'
import { TodoContext } from '../context/TodoContext';
import TodoDetails from './TodoDetails';
const TodoList = () => {

    const {todos, removeTodo , checkTodo} = useContext(TodoContext);

    return todos.length ? (
        <ul className='todo-list'>
            {todos.map((todo , index) => (
                <TodoDetails todo={todo} index={index} removeTodo={removeTodo} checkTodo={checkTodo} key={todo.id}/>
            ))}
        </ul>
    ) : (
        <div>
            there is no Todos yet
        </div>
    )
}

export default TodoList;
