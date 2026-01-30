import look from "../style/look.jsx";
import useCtx from "../context/useCtx.jsx";
import acLdObj from "../obj/acLdObj.js";
import AdjBlock from "./AdjBlock.jsx";
const AcLdHalf = ({ props }) => {
  const ctx = useCtx();
  const currentAcLdObj = acLdObj[ctx.currentCapAc][props];

  return (
    <div style={look.Often1}>
      {Object.entries(currentAcLdObj).map(([title, titleObj]) => {
        const hover = () => {
          ctx.setIsAcLdHd(true);
        };
        const leave = () => {
          ctx.setIsAcLdHd(false);
        };
        return (
          <div key={title} style={look.acLd1}>
            <div style={look.acLd11} onMouseEnter={hover} onMouseLeave={leave}>
              <div style={look.acLd5}>{title}</div>
              <div style={look.acLd10}>
                {Object.entries(titleObj).map(([adj, adjObjs]) => {
                  const props = { title, adj, adjObjs };
                  return <AdjBlock key={adj} props={props} />;
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AcLdHalf;
