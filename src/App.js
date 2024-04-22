import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [inputList, setInputList] = useState([]);
  const [inputText, setinputText] = useState("");
  const [flag, setFlag] = useState(true);
  const [index, setIndex] = useState("");

  let addList = (listItem) => {
    setInputList([...inputList, listItem]);
  };

  const deleteItem = (index) => {
    console.log(index);
    inputList.splice(index, 1);
    setInputList([...inputList]);
  };

  const updateFlag = (flagValue) => {
    setFlag(flagValue);
  };

  const getIndex = (i) => {
    setinputText(inputList[i]);
    setIndex(i);
  };

  let editItem = (index, newValue) => {
    const arr = [...inputList];
    arr[index] = newValue;
    setInputList(arr);
  };

  return (
    <div className="container">
      <p className="mx-auto fs-2 fw-bolder">To-Do App</p>
      <div className="card-container mx-auto ">
        {inputList.map((item, i) => {
          return (
            <Card
              key={i}
              item={item}
              index={i}
              deleteItem={deleteItem}
              updateFlag={updateFlag}
              getIndex={getIndex}
            />
          );
        })}
      </div>
      <div>
        <div className="mx-auto gap-2 d-flex flex-column mt-5">
          <div className="fs-5">To-do</div>
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
            className="submit-btn btn btn-light bg-light p-1 d-flex justify-content-center align-items-center border-dark"
            onClick={() => {
              if (inputText.trim() !== "") {
                if (flag === true) {
                  addList(inputText);
                  setinputText("");
                } else {
                  editItem(index, inputText);
                  setinputText("");
                  setFlag(true);
                }
              } else {
                console.log("the field is emepty");
              }
            }}
          >
            submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
