import logo from "./logo.svg";
import "./App.css";
import { NavigationBar } from "./componants/NavigationBar";
import TodoList from "./componants/TodoList";
import TableTodo from "./componants/TableTodo";
import TodoFooter from "./componants/TodoFooter";
import { todolist } from "./data";

function App() {
  function handleClick({ nametodo, nameuser }) {
    alert(`${nameuser} is ${nametodo}`);
  }

  return (
    <div className="App">
      <NavigationBar />
      <TodoList list={todolist} hello={"helloo"} />
      <TableTodo list={todolist} handleClick={handleClick} />
      <TodoFooter />
    </div>
  );
}

export default App;
