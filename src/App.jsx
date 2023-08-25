import React, { useState, useEffect } from "react";
import "./App.css";
import exercise1Image from "./assets/1.jpeg";
import exercise2Image from "./assets/2.jpeg";
import exercise3Image from "./assets/3.jpeg";
import exercise4Image from "./assets/4.jpeg";
import exercise5Image from "./assets/5.jpeg";
import exercise6Image from "./assets/6.jpeg";
import exercise7Image from "./assets/7.jpeg";
import exercise8Image from "./assets/8.jpeg";
import exercise9Image from "./assets/9.jpeg";
import exercise10Image from "./assets/10.jpeg";
import scaryImage from "./assets/lose.jpeg";

const NUM_EXERCISES = 10; // Number of exercises
const EXERCISE_TIME_LIMIT = 30.0; // Time limit for each exercise in seconds

function shuffleArray(array) {
  // Function to shuffle an array using Fisher-Yates algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function getExerciseImage(exerciseNumber) {
  switch (exerciseNumber) {
    case 1:
      return exercise1Image;
    case 2:
      return exercise2Image;
    case 3:
      return exercise3Image;
    case 4:
      return exercise4Image;
    case 5:
      return exercise5Image;
    case 6:
      return exercise6Image;
    case 7:
      return exercise7Image;
    case 8:
      return exercise8Image;
    case 9:
      return exercise9Image;
    case 10:
      return exercise10Image;

    // ... handle other exercise numbers
    default:
      return ""; // Return an empty string or a default image path
  }
}

function App() {
  const [screen, setScreen] = useState("welcome");
  const [exercisesOrder, setExercisesOrder] = useState(
    shuffleArray([...Array(NUM_EXERCISES).keys()]) // Randomly shuffle exercise order
  );
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [timerInterval, setTimerInterval] = useState(null);

  const [userClicks, setUserClicks] = useState(
    new Array(NUM_EXERCISES).fill(0)
  );
  const [scaryImagesShown, setScaryImagesShown] = useState(
    new Array(NUM_EXERCISES).fill(false)
  );

  useEffect(() => {
    if (startTime && elapsedTime < EXERCISE_TIME_LIMIT) {
      const interval = setInterval(updateTimer, 100);
      setTimerInterval(interval);
      return () => {
        clearInterval(interval);
        setTimerInterval(null); // Reset timer interval state
      };
    }

    if (
      elapsedTime >= EXERCISE_TIME_LIMIT &&
      !scaryImagesShown[currentExerciseIndex]
    ) {
      clearInterval(timerInterval);
      showScaryImage();
      setTimeout(() => {
        advanceToNextExercise();
      }, 2000); // Show scary image for 2 seconds before advancing
    }
  }, [
    startTime,
    elapsedTime,
    timerInterval,
    scaryImagesShown,
    currentExerciseIndex,
  ]);

  const startInstructions = () => {
    setScreen("instructions");
  };

  const updateTimer = () => {
    const currentTime = (Date.now() - startTime) / 1000;
    setElapsedTime(currentTime);
  };

  const handleClick = (event) => {
    if (
      elapsedTime < EXERCISE_TIME_LIMIT &&
      isWithinSpecificArea(event.clientX, event.clientY)
    ) {
      clearInterval(timerInterval);
      advanceToNextExercise();
    }
    setUserClicks((prevClicks) => {
      const updatedClicks = [...prevClicks];
      updatedClicks[currentExerciseIndex]++;
      return updatedClicks;
    });
  };

  const isWithinSpecificArea = (x, y) => {
    // Check if the click coordinates are within the specific area
    // Replace this with your specific area logic
    return true;
  };

  const showScaryImage = () => {
    setScaryImagesShown((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages[currentExerciseIndex] = true;
      return updatedImages;
    });
  };

  const advanceToNextExercise = () => {
    setStartTime(null);
    setElapsedTime(0);
    setCurrentExerciseIndex((prevIndex) => prevIndex + 1);
    if (currentExerciseIndex >= NUM_EXERCISES - 1) {
      setScreen("results");
    }
  };

  const startExercise = () => {
    setStartTime(Date.now());
    setScreen("exercise");
  };

  const startGameAgain = () => {
    setScreen("welcome");
    setExercisesOrder(shuffleArray([...Array(NUM_EXERCISES).keys()]));
    setCurrentExerciseIndex(0);
    setStartTime(null);
    setElapsedTime(0);
    setTimerInterval(null);
    setUserClicks(new Array(NUM_EXERCISES).fill(0));
    setScaryImagesShown(new Array(NUM_EXERCISES).fill(false));
  };

  const renderScreen = () => {
    switch (screen) {
      case "welcome":
        return (
          <div className="screen">
            <h1>Welcome to Where's Waldo Game</h1>
            <button onClick={startInstructions}>Instructions</button>
          </div>
        );
      case "instructions":
        return (
          <div className="screen">
            <h2>Instructions:</h2>
            <p>Explain the game instructions here...</p>
            <button onClick={startExercise}>Start Game</button>
          </div>
        );
      case "exercise":
        const currentExerciseNumber = exercisesOrder[currentExerciseIndex] + 1;
        return (
          <div className="screen">
            <div id="exercise-container">
              {scaryImagesShown[currentExerciseIndex] ? (
                <img
                  src={scaryImage} // Display the scary image
                  alt={`Scary Image`}
                />
              ) : (
                <img
                  id="exercise-image"
                  src={getExerciseImage(currentExerciseNumber)} // Use the imported exercise image
                  alt={`Exercise ${currentExerciseNumber} Image`}
                  onClick={handleClick}
                />
              )}
            </div>
            <div id="timer">
              {(EXERCISE_TIME_LIMIT - elapsedTime).toFixed(1)}
            </div>
          </div>
        );
      case "results":
        return (
          <div className="screen">
            <h2>Results:</h2>
            <table>
              <thead>
                <tr>
                  <th>Exercise</th>
                  <th>Clicks</th>
                  <th>Time</th>
                  <th>Scary Image Shown</th>
                </tr>
              </thead>
              <tbody>
                {userClicks.map((clicks, index) => (
                  <tr key={index + 1}>
                    <td>{index + 1}</td>
                    <td>{clicks}</td>
                    <td>{EXERCISE_TIME_LIMIT}</td>
                    <td>{scaryImagesShown[index] ? "Yes" : "No"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={startGameAgain}>Play Again</button>
          </div>
        );
      default:
        return null;
    }
  };

  return <div className="App">{renderScreen()}</div>;
}

export default App;
