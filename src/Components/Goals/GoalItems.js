import React from "react";
import "./GoalItems.css";

function GoalItems(props) {
  return (
    <div className="goalItems">
      <p>{props.title}</p>
    </div>
  );
}

export default GoalItems;
