import React, { useEffect, useState } from "react";

import "./../styles/wheelComponent.css";

function WheelComponent(props: any) {
  const { items } = props;
  const [selectedItem, setSelectedItem] = useState<any>("null");
  const [wheelVars, setWheelVars] = useState<any>({
    "--nb-item": items.length,
  });
  const [spinning, setSpinning] = useState<string>("");

  const selectItem = async () => {
    console.log("SelectItem");
    console.log(selectedItem);
    if (selectedItem === "null") {
      await setSelectedItem(() => Math.floor(Math.random() * items.length));
      console.log("Item Selected");
      // this.setState({ selectedItem });
    } else {
      await setSelectedItem("null");
      console.log()
      await selectItem();
      console.log("else");
      // this.setState({ selectedItem: null });
    }
  };

  useEffect(() => {
    setSpinning(() => (selectedItem !== "null" ? "spinning" : ""));
    //   // if (selectedItem === null) {
    //   //   selectItem();
    //   // }
  }, [selectedItem]);

  return (
    <div className="wheel-container">
      <div
        className={`wheel ${spinning}`}
        style={
          {
            ...wheelVars,
            "--selected-item": selectedItem,
          } as React.CSSProperties
        }
        onClick={() => selectItem()}
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
