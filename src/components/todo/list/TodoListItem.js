import React from "react";

export const TodoListItem = ({ todo, index, handleDelete, handleToggle }) => {
  return (
    <li key={todo.id} className="list-group-item">
      {todo.done ? (
        <p onClick={() => handleToggle(todo)}>
          <del>
            {index + 1}. {todo.desc}
          </del>
        </p>
      ) : (
        <p onClick={() => handleToggle(todo)}>
          {index + 1}. {todo.desc}
        </p>
      )}
      <button className="btn btn-danger" onClick={() => handleDelete(todo)}>
        Borrar
      </button>
    </li>
  );
};
