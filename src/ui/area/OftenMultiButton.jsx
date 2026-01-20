import React from "react";
import look from "../style/look.jsx";
import Toggle from "./Toggle.jsx";
import OftenMulti from "./OftenMulti.jsx";
const OftenMultiButton = ({
  click,
  Hover,
  Leave,
  ButtonColor,

  // BorderColor,
}) => {
  return (
    <div
      style={look.Multi1}
      onClick={click}
      onMouseEnter={Hover}
      onMouseLeave={Leave}
    >
      <div style={look.Multi2(ButtonColor)} />
    </div>
  );
};

export default OftenMultiButton;
