import React from "react";
import { connect } from "react-redux";
import { deleteTodo, toggleTodo } from "../../redux/actions/todoAction";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Todo = (props) => {
  console.log("tooooo", props);
  const { todos, deleteTodo, toggleTodo } = props;

  const style = {
    float: "left",
    marginRight: "10px",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "6px",
  };

  const changeStatus = (item) => {
    let currentIndex = todos.findIndex((todo) => todo.todoId === item.todoId);
    let currentItem = todos.find((todo) => todo.todoId === item.todoId);

    if (item.status === "todo") {
      let newItem = {
        ...currentItem,
        status: "completed",
      };

      todos[currentIndex] = newItem;
    }
    console.log(item.status, "dd");

    if (item.status === "completed") {
      let newItem = {
        ...currentItem,
        status: "todo",
      };
      todos[currentIndex] = newItem;
    }

    console.log("todosss", todos);
    deleteTodo();
  };

  const reverseArray = [...todos].reverse();

  return (
    <div className="mt-4" style={{maxWidth: "500px", margin: "auto",padding:'20px' }}>
      {todos.length === 0 && <h3>Please add Todo...</h3>}
      {reverseArray.map((item, index) => (
        <div>
          <input
            onChange={(e) => changeStatus(item)}
            style={style}
            type="checkbox"
            name=""
            id=""
          />

          <h5
            key={item.todoId}
            style={{
              fontFamily: "system-ui",fontSize:'15px',
              color: item.status === "todo" ? "black" : "red",
              textDecorationLine:
                item.status === "todo" ? "none" : "line-through",
            }}
          >
            {index + 1}. {item.TodoItemName}
            <button
              onClick={() => deleteTodo(item.todoId)}
              className="btn-danger px-3 rounded"
              style={{ float: "right" }}
            >
               <FontAwesomeIcon icon={faTrash} /> 
            </button>
          </h5>
        </div>
      ))}
    </div>
  );
};

const stateToProps = (state) => {
  return {
    todos: state.todos,
    toggle: state.toggle,
  };
};

const dispatchToProps = {
  deleteTodo: deleteTodo,
  toggleTodo: toggleTodo,
};

export default connect(stateToProps, dispatchToProps)(Todo);
