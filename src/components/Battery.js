import React, { useState } from "react";
import "./Battery.css";

function BatteryButton() {
  const [ripple, setRipple] = useState(false);

  const handlePress = (event) => {
    const button = event.currentTarget;
    const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = button;

    const x = event.pageX - offsetLeft - offsetWidth / 2;
    const y = event.pageY - offsetTop - offsetHeight / 2;

    setRipple({ x, y });
  };

  const handleRelease = () => {
    setRipple(false);
  };

  return (
    <div className="button-container">
      <button
        className="ripple-button"
        onTouchStart={handlePress}
        onTouchEnd={handleRelease}
        onMouseDown={handlePress}
        onMouseUp={handleRelease}
        onMouseLeave={handleRelease}
      >
        {ripple && (
          <span
            className="ripple"
            style={{
              left: ripple.x,
              top: ripple.y,
            }}
          />
        )}
        Press and hold me
      </button>
    </div>
  );
}

export default BatteryButton;
