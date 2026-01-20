import React from "react";
import look from "../style/look.jsx";
import Tg from "./Tg.jsx";
const Toggle = ({ value }) => {
  return (
    <div style={look.ToggleBaseStyle(value)}>
      <div style={look.ToggleKnobStyle(value)} />
    </div>
  );
};
export default Toggle;
