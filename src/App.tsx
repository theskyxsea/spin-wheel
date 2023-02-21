import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./components/LoginForm";
import WheelComponent from "./components/WheelComponent";

function App() {
  return (
    <React.Fragment>
      <div>
        wheel
        <WheelComponent />
        <LoginForm />
      </div>
    </React.Fragment>
  );
}

export default App;
