import { useState } from "react";

const ModifyArrayHock = () => {
  const [bugs, setBugs] = useState([
    { id: 1, title: "bug1", fixed: false },
    { id: 2, title: "bug2", fixed: false },
  ]);

  const clickHandler = () => {
    const newBugs = bugs.map((bug) =>
      bug.id === 1 ? { ...bug, fixed: true } : bug
    );
    setBugs(newBugs);
    console.log(bugs);
  };
  return (
    <div>
      <ul>
        {bugs.map((bug, index) => (
          <li key={index}>{bug.title}</li>
        ))}
      </ul>
      <button onClick={clickHandler}>click me</button>
    </div>
  );
};

export default ModifyArrayHock;
