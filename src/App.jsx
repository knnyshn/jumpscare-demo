import React, { useState } from "react";
import "./App.css";
import Welcome from "./components/Welcome/Welcome";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <h1>Welcome to the game!</h1>
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Instructions
      </button>

      {modalOpen && <Welcome setOpenModal={setModalOpen} />}
    </div>
  );
}

export default App;