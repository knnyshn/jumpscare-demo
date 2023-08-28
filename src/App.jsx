import React, { useState, useEffect } from "react";
import Image from "./components/Image";
import useTime from "./components/useTime";

const App = () => {
  const time = useTime();
  const [boxes, setBoxes] = useState([[0, 0], [69, 420]])
  
  const handleClick = (x, y) => {
    setBoxes([...boxes, [x, y]]);
  }

  return (
    <>
      {time}
      <pre>
        {JSON.stringify(boxes)}
      </pre>
      <Image id={1} onClick={handleClick} />
    </>
  );
}

export default App;