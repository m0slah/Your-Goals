import React from 'react'
import GoalFrom from './GoalFrom'
import './NewGoals.css'
function NewGoals(props) {

const saveGoalDataHandler=(enteredGoalData)=>{

        const goalData = {
          ...enteredGoalData,
          id: Math.random().toString(),
        };
        props.onAddGoal(goalData);
      };


  return (
    <div>
        <GoalFrom  onSaveGoalData={saveGoalDataHandler}/>
    </div>
  )
}

export default NewGoals