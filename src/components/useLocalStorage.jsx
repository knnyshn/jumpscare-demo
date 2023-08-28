import { useEffect, useState } from "react";

const useLocalStorage = (name, initialValue) => {
  const [data, setData] = useState(initialValue);
  
  // Load data
  useEffect(() => {
    const parsedData = localStorage.getItem(name);
    setData(JSON.parse(parsedData))
  },[name])
  
  // Save data
  useEffect(() => {
    localStorage.setItem(name, JSON.stringify(data));
  }, [name, data]);

  return [data, setData]
}

export default useLocalStorage;