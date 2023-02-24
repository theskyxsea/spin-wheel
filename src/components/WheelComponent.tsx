import React, { useEffect, useState } from "react";

import "./../styles/wheelComponent.css";

function WheelComponent(props: any) {
  const { items } = props;
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [first, setFirst] = useState<any>(false);

  const [wheelVars, setWheelVars] = useState<any>({
    "--nb-item": items.length,
  });
  const [spinning, setSpinning] = useState<string>("");

  const selectItem = () => {
    if (selectedItem === null) {
      setSelectedItem(() => Math.floor(Math.random() * items.length));
      setFirst(() => {
        return true;
      });
    } else {
      setSelectedItem(() => {
        return null;
      });
    }
  };

  useEffect(() => {
    if (selectedItem === null && first) {
      setTimeout(selectItem, 200);
    }
    setWheelVars({ ...wheelVars, "--nb-item": items.length });
  }, [selectedItem, items]);

  return (
    <div className="wheel-container">
      <div
        className={`wheel ${selectedItem !== null ? "spinning" : ""}`}
        style={
          {
            ...wheelVars,
            "--selected-item": selectedItem,
          } as React.CSSProperties
        }
        onClick={() => {
          selectItem();
        }}
      >
        {items.map((item: any, index: any) => (
          <div
            className="wheel-item"
            key={index}
            style={{ "--item-nb": index } as React.CSSProperties}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WheelComponent;
