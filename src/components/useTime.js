import { useEffect, useState } from "react";

const useTime = (initialTime) => {
  const [time, setTime] = useState(initialTime || 30);

  // Allows restarting the timer
  useEffect(() => {
    setTime(initialTime || 30);
  }, [initialTime]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (time !== 0) {
        setTime(time - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  return time;
};

export default useTime;