import React, { useState } from "react";
import "./GoalForm.css";
const GoalFrom = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");

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
  };

  return (
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
        <button className="goalForm_btn" type="submit">
          Add Goal
        </button>
      </form>
    </div>
  );
};

export default GoalFrom;
