import React, { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Hello, world!");

  return (
    <div className="App">
      <header>
        <h1>React + GitHub Pages 🚀</h1>
      </header>
      <main>
        <p>{message}</p>
        <button onClick={() =>
          setMessage(message === "Hello, world!" ? "You clicked the button! 🎉" : "Hello, world!")
        }>
          Click Me!
        </button>
      </main>
      <footer>
        <p>© 2025 My React Demo</p>
      </footer>
    </div>
  );
}

export default App;