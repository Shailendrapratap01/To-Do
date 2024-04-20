import "./App.css";
import Card from "./components/Card";
import Searchbar from "./components/Searchbar";

function App() {
  
  const jsonData = [
    "first entry",
    "second entry",
    "third entry",
    "fourth entry",
  ];

  return (
    <>
      <p className="w-75 mx-auto fs-3">To-Do</p>
      <div className="card-container w-75 mx-auto">
        {
          jsonData.map((i,index) => {
          return <Card key={index} i={i}/>
        })}
      </div>
      <div>
        <Searchbar/>
      </div>
    </>
  );
}

export default App;
