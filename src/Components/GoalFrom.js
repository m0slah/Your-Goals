  import React, { useState } from "react";
  import "./GoalForm.css";
  const GoalFrom = () => {
    const [enteredGaol, setEenteredGoal] = useState();
    const addGoalHandler = (event) => {
      setEenteredGoal(event.target.value);
    };

    return (
      <div className="goalForm">
        <form>
          <h1 className="goalForm_title">Your Goals</h1>
          <input className="goalForm_input" type="text" value={enteredGaol} />
          <br />
          <button className="goalForm_btn" onClick={addGoalHandler}>
            Add Goal
          </button>
        </form>
      </div>
    );
  };

  export default GoalFrom;
