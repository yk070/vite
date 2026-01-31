import look from "../style/look.jsx";
import useCtx from "../context/useCtx.jsx";
import capableObj from "../obj/capableObj.js";
import CapableBlock from "./CapableBlock.jsx";
const CapableHalf = ({ props }) => {
  const ctx = useCtx();
  const currentCapableObj = capableObj[ctx.currentCapAc][props];

  return (
    <div style={look.Often1}>
      {Object.entries(currentCapableObj).map(([title, titleObj]) => {
        const hover = () => ctx.setIsCapableAreaHd(true);
        const leave = () => ctx.setIsCapableAreaHd(false);
        return (
          <div key={title} style={look.capable1}>
            <div style={look.capable11}>
              <div style={look.capable5}>{title}</div>
              <div
                style={look.capable10}
                onMouseEnter={hover}
                onMouseLeave={leave}
              >
                {Object.entries(titleObj).map(([adj, adjObjs]) => {
                  const props = { title, adj, adjObjs };
                  return <CapableBlock key={adj} props={props} />;
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CapableHalf;
