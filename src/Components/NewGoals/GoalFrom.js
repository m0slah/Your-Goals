import React, { useState } from "react";
import ErrorModals from "../Goals/ErrorModals";

import "./GoalForm.css";
const GoalFrom = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [error, setError] = useState();

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const goalData = {
      title: enteredTitle,
    };

    props.onSaveGoalData(goalData);
    setEnteredTitle("");

    if (enteredTitle.trim().length === 0) {
    setError({
      title:"please write your username"
    })
    }
  };


  const errorHandler=()=>{
    setError(null);
  }

  return (
    <div>
      {error && <ErrorModals title="a error accour" message={error.title} onConfirm={errorHandler} />}
      <div className="goalForm">
        <form onSubmit={submitHandler}>
          <h1 className="goalForm_title">Your Goals</h1>
          <input
            className="goalForm_input"
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
          <br />
          <button className="goalForm_btn" type="submit" >
            Add Goal
          </button>
        </form>
      </div>
    </div>
  );
};

export default GoalFrom;
