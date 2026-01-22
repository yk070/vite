import React from "react";
import look from "../style/look";
const AcIndex = ({ onclick, color, label }) => {
  return (
    <div
      onClick={onclick}
      style={{
        backgroundColor: color,
        ...look.acIndex1,
      }}
    >
      <span style={look.ac_Index_Button2}>{label}</span>
    </div>
  );
};
export default AcIndex;
