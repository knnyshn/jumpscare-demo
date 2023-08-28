import React, { useState, useEffect } from "react";
import Image from "./components/Image";
import useTime from "./components/useTime";

const App = () => {
  const time = useTime();
  const [boxes, setBoxes] = useState([420, 420])
  
  
  // Load data
  useEffect(() => {
    const data = localStorage.getItem("boxes");
    console.log("data", data);
    // TODO 1
    setBoxes(JSON.parse(data))
  },[])
  
  // Save data
  useEffect(() => {
    localStorage.setItem("boxes", JSON.stringify(boxes));
  },[boxes])

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