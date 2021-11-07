import React , {createContext , useState , useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';
export const TodoContext = createContext();
const TodoContextProvider = (props) => {

    const [todos , setTodos ] = useState([]);
    const addTodo = (text) => {
        setTodos([...todos, {text , isCompleted: false , id:uuidv4()}]);
    }
    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }
    const checkTodo = (id) => {
        setTodos(todos.map(todo => {
            if(todo.id === id){
                return {...todo ,isCompleted:!todo.isCompleted};
            }else{
                return{...todo};
            }
        }));
    }
    const getLocalStorageData = () =>{
        const localTodos = localStorage.getItem('todos');
        return localTodos ? JSON.parse(localTodos) : [];
    }
    
    useEffect(()=>{
        const localTodos = getLocalStorageData();
        setTodos(localTodos);
    },[]);
    
    useEffect(()=> {
        localStorage.setItem('todos', JSON.stringify(todos));
    },[todos]);


    return (
        <TodoContext.Provider value={{todos , addTodo , removeTodo , checkTodo }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider;
