import './App.css';
import Data from './components/Data';
import Form from './components/Form';
import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoContextProvider from './context/TodoContext';

function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <Header/>
        <Form/>
        <TodoList/>
        <Data/>
      </TodoContextProvider>
    </div>
  );
}

export default App;
