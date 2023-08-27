import React from "react";

const TodoList = ({ index, todo, onEdit, onDelete}) => {
  const { name, description } = todo;

  const handleEditClick = () => {
    onEdit(index);
  };


  return (
    <div className="col-3 p-5 m-5 text-start todo-list">
      <h5 className="fw-bold">
        Name : <span className="fw-medium">{name}</span>
      </h5>
      <h5 className="fw-bold">
        Description : <span className="fw-medium">{description}</span>
      </h5>
      <h5 className="pb-3 fw-bold ">
        Status :
        <select className="btn btn-secondary p-0 mx-3 ">
          <option className=" btn btn-success opt" value="Pending">
            Pending
          </option>
          <option className="btn btn-success opt" value="Completed">
            Completed
          </option>
        </select>
      </h5>
      <button
        className="px-3 mx-4 btn btn-outline-success fw-bold"
        onClick={handleEditClick}
      >
        Edit
      </button>
      <button
        className="px-3 mx-3 btn btn-outline-danger fw-bold"
        onClick={() => onDelete(index)}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoList;
