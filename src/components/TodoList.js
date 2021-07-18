import React from "react";
import Todo from "./Todo";
const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => {
          // Warning: Each child in a list should have a unique "key" prop.
          // so we need to add key prop:
          return (
            <Todo key={todo.id} setTodos={setTodos} todo={todo} todos={todos} />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
