import React from "react";
import look from "../style/look";

const TgIndex = ({ onclick, BodyColor, content }) => {
  return (
    <div
      onClick={onclick}
      style={{
        ...look.tgIndex1,
      }}
    >
      <div
        style={{
          ...look.tgIndex3,
          backgroundColor: BodyColor,
        }}
      >
        {content}
      </div>
    </div>
  );
};
export default TgIndex;
