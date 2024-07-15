import  { useState } from "react";

const ModeHoock = () => {
  const [tags, setTags] = useState(["Happy", "Sad"]);

  const clickHandle = () => {
    //add an item
    // const newTag = [...tags, "Angry"];
    //remove an item
    // setTags(tags.filter((tag) => tag !== "Sad"));
    //Update an item
    setTags(tags.map((tag) => (tag === "Sad" ? "Sadness" : tag)));
  };

  return (
    <>
      <button onClick={clickHandle}>click me!</button>
      <div>All the human's modes are: </div>
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </>
  );
};

export default ModeHoock;
