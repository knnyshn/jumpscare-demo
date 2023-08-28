import React from "react"

const Image = ({ id, onClick }) => {

  const handleImageClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = Math.round(e.clientX - rect.left);
    const y = Math.round(e.clientY - rect.top);
    onClick(x, y);
  }

  return (
    <>
      <img
        className="no-drag"
        src={`./assets/${id}.jpeg`}
        alt="dammit"
        onClick={handleImageClick}
      />
    </>
  )
}


export default Image;