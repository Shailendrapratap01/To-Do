import React, { useState } from "react";
import Button from "react-bootstrap/Button";

function Searchbar(props) {
  const [inputText, setinputText] = useState("");
  
  return (
    <>
      <div className="w-75 mx-auto gap-2 d-flex flex-column mt-5">
        <input
          type="text"
          className="p-1"
          placeholder="Your Todo"
          onChange={(e) => {
            setinputText(e.target.value);
          }}
          value={inputText}
        ></input>
        <button
          type="button"
          className="submit-btn btn btn-light d-flex justify-content-center border-dark"
          onClick={() => {
            if (inputText.trim() !== "") {
              props.addList(inputText);
              setinputText("");
            } else {
              console.log("the field is emepty");
            }
          }}
        >
          submit
        </button>
      </div>
    </>
  );
}

export default Searchbar;
