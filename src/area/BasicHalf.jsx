import look from "../style/look.jsx";
import useCtx from "../context/useCtx.jsx";
import basicObj from "../obj/basicObj.js";
import BasicButton from "./BasicButton.jsx";

const BasicHalf = ({ basicProps }) => {
  const ctx = useCtx();
  const currentBasicObj = basicObj[ctx.currentModAc][basicProps] ?? {};

  return (
    <div style={look.Often1}>
      {Object.entries(currentBasicObj).map(([title, obj]) => {
        const { row, modNous } = obj;
        const ArrayLength = modNous?.length;
        const column = Math.ceil(ArrayLength / row);
        return (
          <div key={title} style={look.basic1(row)}>
            <div style={look.basic2}>
              <div style={look.basic3}>{title}</div>
              <div style={look.basic4(column)}>
                {modNous?.map((modKey) => (
                  <BasicButton key={modKey} modKey={modKey} />
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BasicHalf;
