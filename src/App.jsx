import React, { useState, useEffect } from "react";
import Image from "./components/Image";
import useTime from "./components/useTime";

const App = () => {
  const time = useTime();

  return (
    <>
      {time}
      <Image id={1}/>
    </>
  );
}

export default App;