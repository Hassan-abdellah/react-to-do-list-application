import React , {useRef} from 'react'

const TodoDetails = ({todo , index , removeTodo , checkTodo}) => {

    const todoRef = useRef();
    const remove = (e) =>{

        todoRef.current.parentElement.parentElement.parentElement.classList.add('hide');
        setTimeout(() => {
            removeTodo(todo.id);
        },500);
    }    
    const check = () => {
        checkTodo(todo.id);
    }
    return (
        <li className={ todo.isCompleted ? 'todo-details completed' : 'todo-details'}>
            <span className="number">{index+1}</span>
            <div className='todo'>
                <p className="todo-name">{todo.text}</p>
                <div className="buttons">
                    <button className="check" onClick={check}><i className="fas fa-check fa-2x"></i></button>
                    <button ref={todoRef} className="delete" onClick={remove}><i className="fas fa-trash fa-2x"></i></button>
                </div>
            </div>
        </li>
    )
}

export default TodoDetails;
