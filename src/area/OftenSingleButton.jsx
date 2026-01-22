import React from "react";
import look from "../style/look.jsx";
import { FaCheck } from "react-icons/fa6";
import { LuTriangleAlert } from "react-icons/lu";
import OftenSingle from "./OftenSingle.jsx";
const OftenSingleButton = ({
  from,
  Click,
  Hover,
  Leave,
  Label,
  ButtonColor,
  BorderColor,
}) => {
  return (
    <div
      style={look.OftenButton1(BorderColor)}
      onClick={Click}
      onMouseEnter={Hover}
      onMouseLeave={Leave}
    >
      <div style={look.OftenButton2(ButtonColor)}>
        <span style={look.OftenButton3}>{Label}</span>
        {from.isAlert && <LuTriangleAlert style={look.acButton4} />}
        {from.isFunctionUsed && <FaCheck style={look.acButton5} />}
      </div>
    </div>
  );
};

export default OftenSingleButton;
