import React , {useState , useContext} from 'react'
import { TodoContext } from '../context/TodoContext';

const Form = () => {
    const [text , setText] = useState('');
    const {addTodo} = useContext(TodoContext);
    const handleSubmit = (e) =>{
        e.preventDefault();
        addTodo(text);
        setText('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" className='text' value={text} placeholder='add a todo...' onChange={e => setText(e.target.value)} />
            <button type="submit" className='btn'>Add</button>
        </form>
    )
}

export default Form;
