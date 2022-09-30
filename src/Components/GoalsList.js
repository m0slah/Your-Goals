import React from "react";
import Goal from "./Goal";
import "./GoalsList.css";

const GoalsList = (props) => {
  return (
    <div className="goalsList">

      {props.onGoals.map((goal) => (
        <Goal key={goal.id} title={goal.title} />
      ))}
      
    </div>
  );
};

export default GoalsList;
