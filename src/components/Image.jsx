import React from "react"

const Image = ({ id }) => {
  return (
    <>
    <img src={`./assets/${id}.jpeg`} alt="" />
    </>
  )
}

export default Image;