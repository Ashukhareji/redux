import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTodo,
  addTodo,
  deleteTodo,
  deleteCheckedTodos,
  updateTodoStatus,
} from "./todoSlice";
import "./todo.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  const isLoading = useSelector((state) => state.todo.isLoading);
  const error = useSelector((state) => state.todo.error);

  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [checkedTodos, setCheckedTodos] = useState([]);

  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  const handleAddTodo = () => {
    if (newTodoTitle.trim() !== "") {
      dispatch(addTodo({ title: newTodoTitle }));
      setNewTodoTitle("");
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleDeleteCheckedTodo = () => {
    if (checkedTodos.length === 0) {
      alert("Please check todos to delete.");
      return;
    }

    if (window.confirm("Are you sure you want to delete checked todos?")) {
      dispatch(deleteCheckedTodos(checkedTodos))
        .then(() => {
          setCheckedTodos([]);
        })
        .catch((error) => {
          console.error("Error deleting checked todos:", error);
        });
    }
  };

  const handleUpdateTodoStatus = (id, completed, currentTitle, datetime) => {
    dispatch(updateTodoStatus({ id, title: currentTitle, datetime, completed }))
      .then(() => { })
      .catch((error) => {
        console.error("Error updating todo status:", error);
      });
  };
  const handleUpdateCompleteTodoStatus = (id, incompleted, currentTitle, datetime) => {
    dispatch(updateTodoStatus({ id, title: currentTitle, datetime, incompleted }))
      .then(() => { })
      .catch((error) => {
        console.error("Error updating todo status:", error);
      });
  };

  const toggleTodoCheckbox = (id) => {
    if (checkedTodos.includes(id)) {
      setCheckedTodos(checkedTodos.filter((todoId) => todoId !== id));
    } else {
      setCheckedTodos([...checkedTodos, id]);
    }
  };


  const completedTodos = todos.filter((todo) => todo.status === "complete");
  const incompleteTodos = todos.filter((todo) => todo.status === "incomplete");

  return (
    <div>
      <h1>Todo List</h1>

      <div>
        <input
          type="text"
          value={newTodoTitle}
          onChange={(e) => setNewTodoTitle(e.target.value)}
          placeholder="Enter new todo"
        />
        <button onClick={handleAddTodo}>Add Todo</button>
        <button onClick={handleDeleteCheckedTodo}>Delete Checked</button>
      </div>

      {isLoading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>Error: {error}</h2>
      ) : (
        <div>
          {incompleteTodos.length > 0 && (
            <>
              <h2>Incomplete Todos</h2>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Date & Time</th>
                    <th>Action</th>
                    <th>Modify</th>
                    <th>Checkbox</th>
                    <th>Status</th>

                  </tr>
                </thead>
                <tbody>
                  {incompleteTodos.map((todo, index) => (
                    <tr key={todo.id}>
                      <td>{index + 1}</td>
                      <td>{todo.title}</td>
                      <td>{todo.datetime}</td>
                      <td>
                        <button onClick={() => handleDeleteTodo(todo.id)} style={{ outlineStyle: 'none', borderStyle: 'none', backgroundColor: 'transparent' }}>
                          <FontAwesomeIcon icon={faTrash} beat />
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() =>
                            handleUpdateTodoStatus(
                              todo.id,
                              !todo.completed,
                              todo.title,
                              todo.datetime
                            )
                          }
                        >
                          Update
                        </button>
                      </td>
                      <td>
                        <input
                          type="checkbox"
                          checked={checkedTodos.includes(todo.id)}
                          onChange={() => toggleTodoCheckbox(todo.id)}
                        />
                      </td>
                      <td>{todo.completed ? "Complete" : "Incomplete"}</td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}

          {completedTodos.length > 0 && (
            <>
              <h2>Completed Todos</h2>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Date&Time</th>
                    <th>Action</th>
                    <th>Checkbox</th>
                    <th>Status</th>
                    <th>Update</th>

                  </tr>
                </thead>
                <tbody>
                  {completedTodos.map((todo, index) => (
                    <tr key={todo.id}>
                      <td>{index + 1}</td>
                      <td>{todo.title}</td>
                      <td>{todo.datetime}</td>
                      <td>
                        <button onClick={() => handleDeleteTodo(todo.id)} style={{ outlineStyle: 'none', borderStyle: 'none', backgroundColor: 'transparent' }}>
                          <FontAwesomeIcon icon={faTrash} beat />
                        </button>
                      </td>
                      <td>
                        <input
                          type="checkbox"
                          checked={checkedTodos.includes(todo.id)}
                          onChange={() => toggleTodoCheckbox(todo.id)}
                        />
                      </td>
                      <td>{todo.completed ? "Complete" : "Incomplete"}</td>
                      <td>
                        <button onClick={() => handleUpdateCompleteTodoStatus(todo.id,
                          todo.completed,
                          todo.title,
                          todo.datetime)}>Update</button>
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Todo;
