import React, { useEffect, useState } from 'react'
import './index.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Todo from './Components/Todo'
import { getAlltodo, addTodo, updateTodo, deleteTodo } from './utils/HandleApi'

const App = () => {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const [TodoId, setTodoId] = useState('');

  useEffect(() => {
    getAlltodo(setTodo);
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setTodoId(_id);
  }

  return (
    <>
    
    <div className='App'>
    
      <div className="container">
        <h1>Todo App</h1>
        <div className="top">
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter task' />
          <div className="add" onClick={isUpdating ? () => updateTodo(TodoId, text, setText, setTodo, setIsUpdating) : () => addTodo(text, setText, setTodo)}>
            {isUpdating ? "Update" : "Add"}
          </div>
        </div>
        <div className="list">
          {todo.map((item) => (
            <Todo key={item._id} text={item.text}
                  updateMode={() => updateMode(item._id, item.text)}
                  deleteTodo={() => deleteTodo(item._id, setTodo)} />
          ))}
        </div>
      </div>
    </div>
    <ToastContainer />
    </>
  );
}

export default App;