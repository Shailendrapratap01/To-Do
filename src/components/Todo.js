import React, { useState } from "react";
import Badge from "react-bootstrap/Badge";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import "../App.css";

function Todo({
  todo,
  setEditTodo,
  setTodoId,
  setinputText,
  handleCompleteTag,
  setDisplayPopup,
}) {
  return (
    <li className="d-flex justify-content-between align-items-center p-2 border">
      <div className="d-flex justify-content-center gap-2 align-items-center">
        <input
          role="button"
          type="checkBox"
          checked={todo.showCompletedBadge}
          onChange={() => {
            handleCompleteTag(todo.id);
          }}
        ></input>
        <p className="mb-0"> {todo.text} </p>
      </div>
      <div className="d-flex justify-content-center gap-3 align-items-center">
        <Badge
          bg="primary"
          className={`${todo.showCompletedBadge ? "d-block" : "d-none"}`}
        >
          complete
        </Badge>
        <MdDeleteOutline
          role="button"
          className="fs-5"
          onClick={() => {
            setTodoId(todo.id);
            setDisplayPopup(true);
          }}
        />
        <FaRegEdit
          role="button"
          className="fs-5"
          onClick={() => {
            setTodoId(todo.id);
            setEditTodo(true)
            setinputText(todo.text);
          }}
        />
      </div>
    </li>
  );
}

export default Todo;
