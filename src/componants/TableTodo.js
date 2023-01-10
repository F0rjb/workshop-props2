import TrTodo from "./TrTodo";

const TableTodo = ({ list, handleClick }) => {
  return (
    <table border="1">
      <tr>
        <th>User namer</th>
        <th>to do name</th>
        <th> action </th>
      </tr>
      {list.map((el, i) =>
        el.isDone ? <TrTodo el={el} key={i} handleClick={handleClick} /> : ""
      )}
    </table>
  );
};

export default TableTodo;
