import React, { useState } from "react";

const Count = () => {
  const [count, SetCount] = useState(0);
  // let count=0;
  //  count++;
  const debuger = () => {
    SetCount((PrevCount) => PrevCount + 1);
    console.log(count);
  };

  return (
    <div>
      <button onClick={debuger}>count</button>
    </div>
  );
};

export default Count;
