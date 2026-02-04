import look from "../style/look.jsx";
import useCtx from "../context/useCtx.jsx";
import capableObj2 from "../obj/capableObj2.js";
import CapableBlock from "./CapableBlock.jsx";
const Capable = () => {
  const ctx = useCtx();
  const adjPrfssObj = capableObj2[ctx.cdAcAdjNou];

  const click = () => {
    ctx.setCdAcAdjNou(null);
  };
  if (!ctx.isWoAcSd) return null;
  return (
    <div style={look.ac6}>
      <div style={look.ac8} onClick={click}></div>
      <div style={look.ac7}>
        <div style={look.capable13}>{ctx.cdAcAdjNou}</div>
        <div style={look.capable12}>
          {Object.entries(adjPrfssObj).map(([adj, prfss]) => {
            const pHalf = { title: ctx.cdAcAdjNou, adj, prfss };
            return <CapableBlock key={adj} pHalf={pHalf} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Capable;
