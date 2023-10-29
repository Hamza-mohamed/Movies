import React, { useState,useEffect,useContext } from "react";
import { useParams } from "react-router-dom";
const ToDo = (props) => {

  const params = useParams();
  let id = params.ID;
  // console.log(params.ID);

  const [count, setCount] = useState(0);
  // const [mark, setmark] = useState("''");

  const [todoList, settodoList] = useState({
    userInput: "",
    list: [],
  });

  // Set a user input value
  const updateInput = (value) => {
    settodoList({ ...todoList, userInput: value });
  };
  // Add item if user input in not empty
  const addItem = () => {
    if (todoList.userInput !== "") {
      setCount(count + 1);
      const userInput = {
        id: count,
        task: todoList.userInput,
        mark:''
      };

      // Update list
      const list = [...todoList.list];
      list.push(userInput);

      // reset state
      settodoList({
        list,
        userInput: "",
      });
    }
  };
  //
  const deleteItem = (key) => {
    console.log(key);
    const list = [...todoList.list];
    console.log(list);
    // Filter values and leave value which we need to delete
    const updateList = list.filter((item) => item.id !== key);
    console.log(updateList);
    // Update list in state
    settodoList({ ...todoList, list: updateList });
  };

  const markItem = (key) => {

    console.log(key);
    const list = [...todoList.list];
    console.log(list);
    // Filter values and leave value which we need to delete
    var updateList = list.filter((item) => item.id === key);
     console.log("found",updateList);
      updateList[0].mark = "line-through"
    const updateList2 = list.filter((item) => item.id !== key);
    const mylist = updateList.concat(updateList2);
    settodoList({ ...todoList, list: mylist });
   console.log("final",todoList)
  };
  useEffect(() => {
 console.log("watching");
    }
  , [todoList]);

  return (
    <div className="container bg-dark text-white">
      <div id="myDIV">

        <h3>ID: {id}</h3>

        <h2>My To Do App</h2>
        <input
          type="text"
          id="myInput"
          placeholder="Title..."
          className="control-form me-3 p-3"
          name="task"
          value={todoList.userInput}
          onChange={(item) => updateInput(item.target.value)}
        />
        <span className="btn  btn-dark text-white" onClick={() => addItem()}>
          Add
        </span>
      </div>

      {todoList.list.map((task, index) => {


        return (
          <>
            <div className="d-flex bg-secondary m-4  p-2" key={index}>
              <h1
                className="text-warning fs-1  p-3"
                style={{ textDecoration: task?.mark } }
              >
                {task.task}
              </h1>
              {/* <h5 className="mx-3">{task.id}</h5> */}

              <button
                onClick={() => deleteItem(task.id)}
                className="btn btn-dark text-white mx-4 text-small"
              >
                Delete
              </button>
              <button
                onClick={() => markItem(task.id)}
                className="btn btn-dark text-white"
              >
                completed
              </button>
            </div>
          </>
        );
      })}
      {/* {console.log(todoList.list.length > 0 ? todoList.list : "")} */}
    </div>
  );
};

export default ToDo;
