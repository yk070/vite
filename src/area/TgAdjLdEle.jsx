import React from "react";
import look from "../style/look.jsx";
import useMultiBooConvert from "../convert/useMultiBooConvert.jsx";
import useMultiRunConvert from "../convert/useMultiRunConvert.jsx";
import useMultiColConvert from "../convert/useMultiColConvert.jsx";

const TgAdjLdEle = ({ title, objs }) => {
  const boo = useMultiBooConvert({ title, objs });
  const col = useMultiColConvert({ boo });
  const run = useMultiRunConvert({ title, objs });

  return (
    <div
      style={look.OftenHalf1(col)}
      onClick={run.click}
      onMouseEnter={run.hover}
      onMouseLeave={run.leave}
    >
      <div style={look.OftenHalf2(col)}>
        <span style={look.multi1}>{title}</span>
      </div>
    </div>
  );
};

export default TgAdjLdEle;
