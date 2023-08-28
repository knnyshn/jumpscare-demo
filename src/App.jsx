import React, { useState, useEffect } from "react";
import Image from "./components/Image";
import useTime from "./components/useTime";
import useLocalStorage from "./components/useLocalStorage";

const App = () => {
  const time = useTime();
  const [boxes, setBoxes] = useLocalStorage("boxes", [(420, 420)]);

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