import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TodoList.css';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:4000/user');
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos: ', error);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = async () => {
    if (inputValue.trim() !== '') {
      try {
        await axios.post('http://localhost:4000/user', {
          title: inputValue,
          datetime: new Date().toLocaleString(),
          completed: false,
        });
        fetchTodos(); // Fetch the updated list of todos after adding
        setInputValue(''); // Clear the input field after adding
      } catch (error) {
        console.error('Error adding todo: ', error);
      }
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/user/${id}`);
      fetchTodos(); // Fetch the updated list of todos after deleting
    } catch (error) {
      console.error('Error deleting todo: ', error);
    }
  };

  const handleUpdateTodo = async (id, newTitle) => {
    try {
      await axios.patch(`http://localhost:4000/user/${id}`, {
        title: newTitle,
        completed: false,
      });
      fetchTodos();

    } catch (error) {
      console.error('Error updating todo: ', error);
    }
  };

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a todo..."
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date&Time</th>
            <th>TITLE</th>
            <th>UPDATE</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={todo.id}>
              <td>{index + 1}</td>
              <td>{todo.datetime}</td>
              <td>{todo.title}</td>
              <td>
                <button
                  onClick={() => {
                    handleUpdateTodo(todo.id, inputValue);
                  }}>Update</button>

              </td>
              <td>
                <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodoList;
