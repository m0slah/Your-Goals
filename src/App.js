import "./App.css";
import GoalFrom from "./Components/GoalFrom";
import GoalsList from "./Components/GoalsList";

function App() {
  const goals = [
    {
      id: 1,
      title: "Learn React",
    },
    {
      id: 2,
      title: "Reading Advance Computer Programming",
    },
    {
      id: 3,
      title: "Compele Cyber Security Project",
    },
  ];

  return <div className="App">
  <GoalFrom/>
  <GoalsList onGoals={goals}/>
  </div>;
}

export default App;
