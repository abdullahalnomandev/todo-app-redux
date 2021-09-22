import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../../redux/actions/todoAction";

const Input = (props) => {
  // console.log("input",props);
  const { addTodo } = props;

  const [todo, setTodo] = useState(null);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    const todoItem = {
      TodoItemName: todo,
      todoId: Math.floor(Math.random() * 100),
      status: "todo",
    };
    if (todo !== null && todo !== "") {
      addTodo(todoItem);
      setError(false);
    } else {
      setError(true);
    }

    e.target.reset();
    e.preventDefault();
    setTodo(null);
  };

  return (
    <div className="pt-3  container" onSubmit={handleSubmit}>

        <div className="mb-3" style={{maxWidth:'150px',margin:'auto'}}>
          <img style={{maxWidth:'150px',height:'150px',borderRadius:'100%'}} className="img-fluid" src="https://scontent.fcgp8-1.fna.fbcdn.net/v/t1.6435-9/159149581_452976282818227_4723153503935780871_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHx3Zp0vgSYboxm4Glnf7c5-6EVwUvJlkf7oRXBS8mWR6DPnO5bqKegvAB5KMZNibMaZ0MapxXkPFWaxbNHR6xH&_nc_ohc=P0xM_JptxFoAX8Owx1p&_nc_ht=scontent.fcgp8-1.fna&oh=a9e422958b1f9420b757e7b9e3e3f78d&oe=6170A84C" alt="" />
        </div>
        
      <form action="" className="d-flex m-auto w-auto-50  text-center ">
        <input
          className="form-control d-inline-block "
          type="text"
          placeholder="Write Todo"
          onChange={(e) => setTodo(e.target.value)}
        />
        <input
          className="btn-info px-3 py-2 rounded d-inline-block"
          type="submit"
          value="Add Todo"
        />
      </form>

      {todo === null && error === true && (
        <h4 className="text-center text-danger mt-3">Please Add Todo ***</h4>
      )}
    </div>
  );
};

const stateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const dispatchToProps = {
  addTodo: addTodo,
};

export default connect(stateToProps, dispatchToProps)(Input);
