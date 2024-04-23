import React, { useState } from "react";
import "../App.css";
import Badge from "react-bootstrap/Badge";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

function Todo({ todo, deleteTodo, updateFlag, getTodoId ,handleCompleteTag}) {
  return (
    <>
      <li className="d-flex justify-content-between align-items-center p-2 border">
        <div className="d-flex justify-content-center gap-2 align-items-center">
          <input
            type="checkBox"
            checked={todo.todoToggle}
            onChange={() => {
              handleCompleteTag(todo.id)
            }}
          ></input>
          <p className="mb-0"> {todo.text} </p>
        </div>
        <div className="d-flex justify-content-center gap-3 align-items-center">
          <Badge bg="primary" className={`${todo.todoToggle?'d-block':'d-none'}`}>
            complete
          </Badge>
          <MdDeleteOutline
            className="fs-5"
            onClick={() => {
              deleteTodo(todo.id);
            }}
          />
          <FaRegEdit
            className="fs-5"
            onClick={() => {
              getTodoId(todo);
              updateFlag(true);
            }}
          />
        </div>
      </li>
    </>
  );
}

export default Todo;
