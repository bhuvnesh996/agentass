import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import "./App.css";
import Result from "./components/Result";

// dummy question we can use API also to fetch questions one by one
// or a complete dump at once
const questions = [
  {
    question: "Humayun was born in the year?",
    options: ["1508", "1608", "1708", "1808"],
    answer: "1508",
  },
  {
    question: "Who Invented the 3-D printer?",
    options: [
      "Nick Holonyak",
      "Elias Howe",
      "Chuck Hull",
      "Christiaan Huygens",
    ],
    answer: "Chuck Hull",
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Fe", "Cu"],
    answer: "Au",
  },
  {
    question:
      "What is the capital of France?",
    options:  ["New York", "London", "Paris", "Dublin"],
    answer: "Paris",
  },
  {
    question: "Who painted the Mona Lisa?",
     options:["Vincent Van Gogh", "Pablo Picasso", "Leonardo Da Vinci", "Claude Monet"],
    answer: "Leonardo Da Vinci",
  },
  {
    question: "In which year did the Titanic sink?",
    options: ["1912", "1921", "1935", "1944"],
    answer: "1912",
  },
  {
    question: "What is the largest mammal on Earth?",
    options: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    answer: "Blue Whale",
  },
  {
    question: "Who is the author of 'The Great Gatsby'?",
    options: [
      "F. Scott Fitzgerald",
      "Ernest Hemingway",
      "Mark Twain",
      "John Steinbeck",
    ],
    answer: "F. Scott Fitzgerald",
  },
  {
    question: "What is the chemical formula for water?",
    options: ["H2O", "CO2", "N2", "CH4"],
    answer: "H2O",
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    options: ["Mars", "Venus", "Mercury", "Jupiter"],
    answer: "Mars",
  },
];

const Answers = {};

function App() {
  const [showResult, setshowResult] = useState(false);

  return (
    <div className="App h-screen">
      {!showResult ? (
        <Dashboard
          questions={questions}
          Answers={Answers}
          setshowResult={setshowResult}
        />
      ) : (
        <Result questions={questions} Answers={Answers} />
      )}
    </div>
  );
}

export default App;
