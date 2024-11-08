// src/App.js
import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Display from "./components/Display";
import Input from "./components/Input";

function App() {
  const [inputValue, setInputValue] = useState("");
  const firstName = "John"; // Change this to your name or leave it empty

  const handleInputSubmit = (value) => {
    setInputValue(value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Debug Sample App</h1>
      </header>
      <main>
        <Counter />
        <Display />
        <Input label="Enter some text" onSubmit={handleInputSubmit} />
        <p>{inputValue}</p>
        <p>Hello, {firstName ? firstName : "there"}!</p>
        {firstName && (
          <img src="https://via.placeholder.com/100" alt="Placeholder" />
        )}
      </main>
    </div>
  );
}

export default App;
