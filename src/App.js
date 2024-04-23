import { useState } from "react";
import Todo from "./components/Todo";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [inputText, setinputText] = useState("");
  const [flag, setFlag] = useState(false);
  const [todoId, setTodoId] = useState("");
  const [inputBorder, setInputBorder] = useState("");

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
      if (flag === false) {
        createTodo();
      } else {
        editItem(todoId);
        setFlag(false);
      }
      setinputText("");
    } else {
      setInputBorder("border-danger");
    }
  };

  return (
    <div className="container">
      <p className="mx-auto fs-2 fw-bolder">To-Do App</p>
      <div className="card-container mx-auto ">
        {todoList.map((todo, i) => {
          return (
            <Todo
              key={i}
              todo={todo}
              deleteTodo={deleteTodo}
              handleCompleteTag={handleCompleteTag}
              setFlag={setFlag}
              setTodoId={setTodoId}
              setinputText={setinputText}
            />
          );
        })}
      </div>
      <div>
        <div className="mx-auto gap-2 d-flex flex-column mt-5">
          <div className="fs-5">To-do</div>
          <input
            type="text"
            className={`p-1 border ${inputBorder}`}
            placeholder="Your Todo"
            onChange={(e) => {
              setinputText(e.target.value);
              setInputBorder("");
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
