import React from "react";
import "../App.css";
import Badge from 'react-bootstrap/Badge';

function Card({ i }) {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center border-bottom px-2 border-dark">
        <div className="d-flex justify-content-between gap-2 align-items-center">
          <input type="checkBox"></input>
          <p>{i}</p>
        </div>
        <div className="right-div">
          {/* <button>complete</button> */}
          <Badge bg="secondary">
            complete
          </Badge>
        </div>
      </div>
    </>
  );
}

export default Card;
