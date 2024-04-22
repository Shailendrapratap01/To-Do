import React, { useState } from "react";
import "../App.css";
import Badge from "react-bootstrap/Badge";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

function Card({ item, deleteItem, index, updateFlag, getIndex }) {
  const [showBadge, setShowBadge] = useState("d-none ");

  return (
    <>
      <li className="d-flex justify-content-between align-items-center p-2 border">
        <div className="d-flex justify-content-center gap-2 align-items-center">
          <input
            type="checkBox"
            onChange={(e) => {
              if (e.target.checked) {
                setShowBadge("d-block");
              } else {
                setShowBadge("d-none");
              }
            }}
          ></input>
          <p className="mb-0"> {item} </p>
        </div>
        <div className="d-flex justify-content-center gap-3 align-items-center">
          <Badge bg="primary" className={showBadge}>
            complete
          </Badge>
          <MdDeleteOutline
            className="fs-5"
            onClick={() => {
              deleteItem(index);
            }}
          />
          <FaRegEdit
            className="fs-5"
            onClick={() => {
              getIndex(index);
              updateFlag(false);
            }}
          />
        </div>
      </li>
    </>
  );
}

export default Card;
