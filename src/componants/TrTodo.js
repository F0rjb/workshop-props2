const TrTodo = ({ el, handleClick }) => {
  return (
    <tr>
      <td>{el.username}</td>
      <td>{el.todoname}</td>
      <td>
        <button
          onClick={() =>
            handleClick({ nameuser: el.username, nametodo: el.todoname })
          }
        >
          Action
        </button>
      </td>
    </tr>
  );
};
export default TrTodo;
