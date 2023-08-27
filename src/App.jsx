import React, { useState, useEffect } from "react";

const useTime = () => {
  const [time, setTime] = useState(30)

  useEffect(() => {
    const interval = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [time])

  return time
}

const Image = ({ id }) => {
  return (
    <>
    <img src={`./assets/${id}.jpeg`} alt="" />
    </>
  )
}

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