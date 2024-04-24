import React from "react";
import { Modal } from "react-bootstrap";

function Confirmation({ setDisplayPopup, displayPopup, deleteTodo, todoId }) {
  return (
    <Modal show={displayPopup} centered>
      <Modal.Header>
        <Modal.Title>Delete Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="alert alert-danger">Are You Sure ?</div>
      </Modal.Body>
      <Modal.Footer>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            deleteTodo(todoId);
            setDisplayPopup(false);
          }}
        >
          Delete
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
            setDisplayPopup(false);
          }}
        >
          Cancel
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default Confirmation;
