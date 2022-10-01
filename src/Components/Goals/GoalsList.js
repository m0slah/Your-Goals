import React from "react";
import GoalItems from "./GoalItems";
import "./GoalsList.css";

const GoalsList = (props) => {
  return (
    <div className="goalsList">
      {props.onGoals.map((goal) => (
        <GoalItems key={goal.id} title={goal.title} />
      ))}
    </div>
  );
};

export default GoalsList;
