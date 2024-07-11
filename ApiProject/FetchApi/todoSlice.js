import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = "http://localhost:4000/user";

export const fetchTodo = createAsyncThunk("todo/fetchTodo", async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data.map((todo) => ({
    ...todo,
    status: todo.completed ? "complete" : "incomplete",
  }));
});

export const addTodo = createAsyncThunk("todo/addTodo", async (newTodo) => {
  window.location.reload();
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      title: newTodo.title,
      completed: false,
      datetime: new Date().toLocaleString(),
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const data = await response.json();
  return data;
});

export const deleteTodo = createAsyncThunk("todo/deleteTodo", async (id) => {
  await fetch(`${url}/${id}`, {
    method: "DELETE",
  });
  return id;
});

export const deleteCheckedTodos = createAsyncThunk(
  "todo/deleteCheckedTodos",
  async (checkedIds) => {
    await Promise.all(
      checkedIds.map(async (id) => {
        await fetch(`${url}/${id}`, {
          method: "DELETE",
        });
      })
    );
    return checkedIds;
  }
);

export const updateTodoStatus = createAsyncThunk(
  "todo/updateTodoStatus",
  async ({ id, title, datetime, completed }) => {
    window.location.reload();
    const response = await fetch(`${url}/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        title: title,
        datetime: datetime,
        completed: completed,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const updatedTodo = await response.json();
    return updatedTodo;
  }
);
const todoSlice = createSlice({
  name: "todo",
  initialState: {
    isLoading: false,
    todos: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodo.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todos = action.payload;
      })
      .addCase(fetchTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addTodo.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todos.push(action.payload);
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(deleteTodo.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(deleteCheckedTodos.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteCheckedTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todos = state.todos.filter(
          (todo) => !action.payload.includes(todo.id)
        );
      })
      .addCase(deleteCheckedTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(updateTodoStatus.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateTodoStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        const updatedTodo = action.payload;
        const index = state.todos.findIndex((todo) => todo.id === updatedTodo.id);
        if (index !== -1) {
          state.todos[index] = updatedTodo;
        }
      })
      .addCase(updateTodoStatus.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default todoSlice.reducer;
