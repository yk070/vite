import look from "../style/look.jsx";
import CapableEle from "./CapableEle.jsx";
import useCapableBlockCol from "../convert/useCapableBlockCol.jsx";
import useCapableBlockRun from "../convert/useCapableBlockRun.jsx";
// const pHalf = { title: ctx.cdAcAdjNou, adj, prfss };
const CapableBlock = ({ pHalf }) => {
  const col = useCapableBlockCol({ pHalf });
  const run = useCapableBlockRun({ pHalf });
  return (
    <div
      style={look.capable8(pHalf.prfss.length, col)}
      onMouseEnter={run.hover}
      onMouseLeave={run.leave}
    >
      <div style={look.capable15}>
        {pHalf.prfss.map((prfs, i) => {
          const pBlock = { adj: pHalf.adj, prfs, i };
          return <CapableEle key={i} pBlock={pBlock} />;
        })}
      </div>
    </div>
  );
};

export default CapableBlock;
