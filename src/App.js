import { useState } from "react";
import Todo from "./components/Todo";
import "./App.css";
import Confirmation from "./components/Confirmation";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [inputText, setinputText] = useState("");
  const [createOrUpdateTodoFlag, setCreateOrUpdateTodoFlag] = useState(false);
  const [todoId, setTodoId] = useState("");
  const [inputError, setInputError] = useState(false);
  const [displayPopup, setDisplayPopup] = useState(false);

  const createTodo = () => {
    const todaData = {
      text: inputText,
      id: Date.now(),
      showCompletedBadge: false,
    };
    setTodoList([...todoList, todaData]);
  };

  const deleteTodo = (todoId) => {
    const updatedTodoList = todoList.filter((todo) => {
      return todo.id !== todoId;
    });
    setTodoList(updatedTodoList);
  };

  const editItem = (todoId) => {
    todoList.map((todo) => {
      if (todo.id === todoId) {
        todo.text = inputText;
      }
      return todo;
    });
  };

  const handleCompleteTag = (todoId) => {
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, showCompletedBadge: !todo.showCompletedBadge };
      } else {
        return todo;
      }
    });
    setTodoList(updatedTodoList);
  };

  const handleSubmit = () => {
    if (inputText.trim() !== "") {
      if (createOrUpdateTodoFlag === false) {
        createTodo();
      } else {
        editItem(todoId);
        setCreateOrUpdateTodoFlag(false);
      }
      setinputText("");
    } else {
      setInputError(true);
    }
  };

  return (
    <div className="container py-4">
      <Confirmation
        setDisplayPopup={setDisplayPopup}
        displayPopup={displayPopup}
        deleteTodo={deleteTodo}
        todoId={todoId}
      />
      <p className="mx-auto fs-2 fw-bolder">To-Do App</p>
      <div className="card-container mx-auto">
        {todoList.map((todo, i) => {
          return (
            <Todo
              key={i}
              todo={todo}
              handleCompleteTag={handleCompleteTag}
              setCreateOrUpdateTodoFlag={setCreateOrUpdateTodoFlag}
              setTodoId={setTodoId}
              setinputText={setinputText}
              setDisplayPopup={setDisplayPopup}
            />
          );
        })}
      </div>
      <div>
        <div className="mx-auto gap-2 d-flex flex-column mt-5">
          <div className="fs-5">To-do</div>
          <input
            type="text"
            className={`p-1 border ${inputError ? "border-danger" : ""}`}
            placeholder="Your Todo"
            onChange={(e) => {
              setinputText(e.target.value);
              setInputError(false);
            }}
            value={inputText}
          ></input>
          <button
            type="button"
            className="submit-btn btn btn-light bg-light p-1 d-flex justify-content-center align-items-center border-dark"
            onClick={() => {
              handleSubmit();
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
