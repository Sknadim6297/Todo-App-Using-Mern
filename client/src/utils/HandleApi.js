import axios from 'axios';
import { toast } from 'react-toastify';

const baseUrl = 'https://todo-app-using-mern-iwnv.onrender.com';

const getAlltodo = (setTodo) => {
  axios.get(`${baseUrl}/get`)
    .then((response) => {
      setTodo(response.data);

    })
    .catch((error) => {
      console.log(error);
    });
}

const addTodo = (text, setText, setTodo) => {
  axios.post(`${baseUrl}/save`, { text })
    .then((response) => {
      console.log(response);
      setText('');
      getAlltodo(setTodo);
      toast("Todo added successfully");
    })
    .catch((error) => {
      console.log(error);
      toast("Error adding todo");
    });
}

const updateTodo = (TodoId, text, setText, setTodo, setIsUpdating) => {
  axios.post(`${baseUrl}/update`, { _id: TodoId, text })
    .then((response) => {
      console.log(response);
      setText('');
      setIsUpdating(false);
      getAlltodo(setTodo);
      toast("Todo updated successfully");
    })
    .catch((error) => {
      console.log(error);
      toast("Error updating todo");
    });
}

const deleteTodo = (_id, setTodo) => {
  axios.post(`${baseUrl}/delete`, { _id })
    .then((response) => {
      console.log(response);
      getAlltodo(setTodo);
      toast("Todo deleted successfully");
    })
    .catch((error) => {
      console.log(error);
      toast("Error deleting todo");
    });
}

export { getAlltodo, addTodo, updateTodo, deleteTodo };
