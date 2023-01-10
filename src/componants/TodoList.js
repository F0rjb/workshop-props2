import TodoCard from "./TodoCard";

const TodoList = ({ list }) => {
  console.log(list);
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {list.map((el, i) => (
        <TodoCard content={el} key={i} />
      ))}
    </div>
  );
};
export default TodoList;
