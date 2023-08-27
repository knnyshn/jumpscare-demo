import React from "react";

function Welcome({ setOpenModal }) {

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        </div>
        <div className="title">
          <h1>Instructions:</h1>
          <p></p>
        </div>
        <div className="body">
          <p>There will be ten pictures with wildlife hidden within! You have thirty seconds to find the animal within the picture or else there will be a surprise! Hit start to start the game or cancel if you don't like surprises.</p>
      </div>
      </div>
    
      
  );
}

export default Welcome;
