import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
// import LoginForm from "./components/LoginForm";
import WheelComponent from "./components/WheelComponent";

function App() {
  const [places, setPlaces] = useState<string[]>([
    "Pizzas",
    "Sandwiches",
    "Salads",
    "Soup",
    "Japanese food",
    "Pastas",
  ]);
  return (
    <React.Fragment>
      <div>
        <WheelComponent items={places} />
        {/* <LoginForm /> */}
      </div>
    </React.Fragment>
  );
}

export default App;
