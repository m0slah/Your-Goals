import { React, useState } from "react";

import "./App.css";
import GoalsList from "./Components/Goals/GoalsList";
import NewGoals from "./Components/NewGoals/NewGoals";

const DUMMY_EXPENSES = [

  {
    id: 1,
    title: "Reading Advance Computer Programming",
  },
  {
    id: 2,
    title: "Compele Cyber Security Project",
  },
];

function App() {
  const [goals, setGoals] = useState(DUMMY_EXPENSES);

  const addGoallHandler = (goal) => {
    setGoals((prevGoal) => {
      return [goal, ...prevGoal];
    });
  };

  return (
    <div className="App">
      <NewGoals onAddGoal={addGoallHandler} />
      <GoalsList onGoals={goals} />
    </div>
  );
}

export default App;
