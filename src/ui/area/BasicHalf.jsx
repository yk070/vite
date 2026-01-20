import React from "react";
import look from "../style/look.jsx";
import useCtx from "../context/useCtx.jsx";
import basicObj from "../obj/basicObj.jsx";
import BasicButtons from "./BasicButtons.jsx";
import AcButtons from "./AcButtons.jsx";
const BasicHalf = ({ basicProps }) => {
  const ctx = useCtx();
  const currentBasicObj = basicObj[ctx.currentModAc][basicProps] ?? {};
  // console.log(currentBasicObj);
  return (
    <div style={look.Often1}>
      {Object.entries(currentBasicObj).map(([title, obj]) => {
        const { row, modKeys } = obj;
        const ArrayLength = modKeys?.length;
        const column = Math.ceil(ArrayLength / row);
        return (
          <div key={title} style={look.basic1(row)}>
            <div style={look.basic2}>
              <div style={look.basic3}>{title}</div>
              <div style={look.basic4(column)}>
                <BasicButtons modKeys={modKeys} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BasicHalf;
