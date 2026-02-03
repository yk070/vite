import look from "../style/look.jsx";
import useCtx from "../context/useCtx.jsx";
import capableObj2 from "../obj/capableObj2.js";
import CapableBlock from "./CapableBlock.jsx";
const AlphaNumBlock = () => {
  const ctx = useCtx();

  const adjPreferencessObj = capableObj2[ctx.sdAcAdjNou];

  const click = () => {
    ctx.setSdAcAdjNou(null);
  };
  if (!ctx.isWoAcSd) return null;
  return (
    <div style={look.ac6} onClick={click}>
      <div style={look.ac7}>
        {Object.entries(adjPreferencessObj).map(([adj, preferencess]) => {
          const pHalf = { title: ctx.sdAcAdjNou, adj, preferencess };
          return <CapableBlock key={adj} pHalf={pHalf} />;
        })}
      </div>
    </div>
  );
};

export default AlphaNumBlock;
