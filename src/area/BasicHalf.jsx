import look from "../style/look.jsx";
import useCtx from "../context/useCtx.jsx";
import basicObj from "../obj/basicObj.js";
import BasicEle from "./BasicEle.jsx";

const BasicHalf = ({ basicProps }) => {
  const ctx = useCtx();
  const currBasicObj = basicObj[ctx.currCapAc][basicProps];

  return (
    <div style={look.Often1}>
      {Object.entries(currBasicObj).map(([title, obj]) => {
        const { row, adjNous } = obj;
        const ArrayLength = adjNous?.length;
        const column = Math.ceil(ArrayLength / row);
        return (
          <div key={title} style={look.basic1(row)}>
            <div style={look.basic2}>
              <div style={look.basic3}>{title}</div>
              <div style={look.basic4(column)}>
                {adjNous?.map((adjNou) => (
                  <BasicEle key={adjNou} adjNou={adjNou} />
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
