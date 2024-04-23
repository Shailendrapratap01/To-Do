import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";

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
      todoToggle: false,
    };
    setTodoList([...todoList, todaData]);
  };

  const deleteTodo = (todoId) => {
    const updatedTodoList = todoList.filter((todo) => {
      return todo.id !== todoId;
    });
    setTodoList(updatedTodoList);
  };

  const updateFlag = (flagValue) => {
    setFlag(flagValue);
  };

  const getTodoId = (todo) => {
    setinputText(todo.text);
    setTodoId(todo.id);
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
        return { ...todo, todoToggle: !todo.todoToggle };
      } else {
        return todo;
      }
    });
    setTodoList(updatedTodoList);
  };

  const handleSubmit = ()=>{
    if (inputText.trim() !== "") {
      if (flag === false) {
        createTodo();
        setinputText("");
      } else {
        editItem(todoId);
        setinputText("");
        setFlag(false);
      }
    } else {
      setInputBorder("border-danger");
    }
  }

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
              updateFlag={updateFlag}
              getTodoId={getTodoId}
              handleCompleteTag={handleCompleteTag}
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
              handleSubmit()
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
