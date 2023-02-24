import React, { useState } from "react";
import WheelComponent from "./WheelComponent";

function GamePageLayout() {
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
      <WheelComponent items={places} />
      <div className="flex mt-2 justify-center">
        <span>Add more options :</span>
        <input
          className="border-2 border-black mx-2"
          type="string"
          onChange={(e) => setValue(() => e.target.value)}
        />
        <button
          className="border-2 px-2 border-black"
          onClick={() => setPlaces(() => [...places, value])}
        >
          Add
        </button>
      </div>
    </React.Fragment>
  );
}

export default GamePageLayout;
