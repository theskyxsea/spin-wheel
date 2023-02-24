import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
// import LoginForm from "./components/LoginForm";
import GamePageLayout from "./components/GamePageLayout";

function App() {
  const [places, setPlaces] = useState<string[]>([
    "Pizzas",
    "Sandwiches",
    "Salads",
    "Soup",
    "Japanese food",
    "Pastas",
  ]);
  const [value, setValue] = useState<string>("");
  return (
    <React.Fragment>
      <div>
        <GamePageLayout />

        {/* <LoginForm /> */}
      </div>
    </React.Fragment>
  );
}

export default App;
