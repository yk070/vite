import React from "react";
import useCtx from "../context/useCtx.jsx";
import useMultiBooConvert from "../convert/useMultiBooConvert.jsx";
import look from "../style/look";
import useMultiRunConvert from "../convert/useMultiRunConvert.jsx";
import useMultiColConvert from "../convert/useMultiColConvert.jsx";
import OftenBlock from "./OftenBlock.jsx";
const OftenMulti = ({ multiProps }) => {
  const ctx = useCtx();
  return (
    <>
      {Object.entries(multiProps.mediumObj).map(([smallTitle, smallObj]) => {
        const boo = useMultiBooConvert({
          multiProps,
          smallTitle,
          smallObj,
        });
        const col = useMultiColConvert({
          multiProps,
          boo,
        });
        const run = useMultiRunConvert({
          multiProps,
          smallTitle,
        });
        return (
          <div
            key={smallTitle}
            style={look.Multi1}
            onClick={run.click}
            onMouseEnter={run.hover}
            onMouseLeave={run.leave}
          >
            <div style={look.Multi2(col)} />
          </div>
        );
      })}
    </>
  );
};
export default OftenMulti;
