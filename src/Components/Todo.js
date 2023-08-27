import React, { useState } from "react";
import TodoList from "./TodoList";

const Todo = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);

  const handleAddTodo = () => {
    if (name && description) {
      const newTodo = {
        name,
        description,
        status: "Pending", // Set the initial status as "Pending"
      };
      if (editingIndex !== -1) {
        // If editing an existing todo, replace it
        const updatedTodos = [...todos];
        updatedTodos[editingIndex] = newTodo;
        setTodos(updatedTodos);
      } else {
        // If adding a new todo, append it
        setTodos([...todos, newTodo]);
      }
      setName("");
      setDescription("");
      setEditingIndex(-1);
    }
  };

  const handleEdit = (index) => {
    const { name, description } = todos[index];
    setName(name);
    setDescription(description);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1); // Remove the todo at the specified index

    setTodos(updatedTodos);
  };


  return (
    <div>
      <div className="text-center">
        <input
          className="mx-4 p-2 px-3"
          type="text"
          placeholder="Your's Task Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="mx-4  p-2 px-3"
          for="text"
          placeholder="Your's Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button className="mx-4 btn btn-success" onClick={handleAddTodo}>
          Add Todo
        </button>
      </div>
      <div className=" text-center py-5 ">
        <div className="row">
          <div className="col-4">
            <h5 className="h4 ps-5">My Todo List</h5>
          </div>
          <div className="col-6 text-end">
            <h5 className="h4">Status Filter</h5>
          </div>
          <div className="col-2 text-start ">
            <select
              className=" btn btn-danger">
              <option  value="All">
                All
              </option>
              <option value="Pending">
                Pending
              </option>
              <option  value="Completed">
                Completed
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className="row ms-3">
        {todos.map((todo, index) => (
          <TodoList
            key={index}
            index={index}
            todo={todo}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
