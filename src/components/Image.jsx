import React from "react"

const Image = ({ id }) => {
  const handleClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = Math.round(e.clientX - rect.left);
    const y = Math.round(e.clientY - rect.top);
    console.log(`x: ${x}, y: ${y}`);
  }

  return (
    <>
      <img
        className="no-drag"
        src={`./assets/${id}.jpeg`}
        alt="dammit"
        onClick={handleClick}
      />
    </>
  )
}


export default Image;