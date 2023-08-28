// import React, { useState, useEffect } from "react";
// import Image from "./components/Image.jsx";
// import useTime from "./components/useTime.js";
// import useLocalStorage from "./components/useLocalStorage.jsx";

// const App = () => {
//   const time = useTime();
//   const [boxes, setBoxes] = useLocalStorage("boxes", []);

//   const handleClick = (x, y) => {
//     setBoxes([...boxes, [x, y]]);
//   }

//   return (
//     <>
//       <div class="flex justify-center text-lg">
//         {time}
//       </div>
//       <pre>
//         {JSON.stringify(boxes)}
//       </pre>
//       <Image id={1} onClick={handleClick} />
//     </>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import Image from "./components/Image.jsx";
import useTime from "./components/useTime.js";
import useLocalStorage from "./components/useLocalStorage.jsx";

const App = () => {
  const [boxes, setBoxes] = useLocalStorage("boxes", []);
  const time = useTime();

  // Ensure that boxes is always an array
  const initialBoxes = Array.isArray(boxes) ? boxes : [];
    
  const handleClick = (x, y) => {
    setBoxes([...initialBoxes, [x, y]]);
  }

  return (
    <>
      <div class="flex justify-center text-lg">
        {time}
      </div>  
      <pre>
        {JSON.stringify(initialBoxes)}
      </pre>
      <Image id={1} onClick={handleClick} />
    </>
  );
}

export default App;
