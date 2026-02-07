import look from "../style/look.jsx";
import CapableEle from "./CapableEle.jsx";
import useCapableBlockCol from "../convert/useCapableBlockCol.jsx";
import useCapableBlockRun from "../convert/useCapableBlockRun.jsx";
import useCapableBlockRoo from "../convert/useCapableBlockRoo.jsx";
// const pHead = { adj, prfss };
const CapableBlock = ({ pHead }) => {
  const roo = useCapableBlockRoo({ pHead });
  const col = useCapableBlockCol({ pHead });
  const run = useCapableBlockRun({ pHead });

  return (
    <div
      style={look.capable8(pHead.prfss.length)}
      onMouseEnter={run.hover}
      onMouseLeave={run.leave}
    >
      <div style={look.capable15}>
        <div style={look.capable19(col.adj)}>
          <span style={look.capable29}>{pHead.adj}</span>
        </div>
        <div style={look.capable21(col.hdBlock)}>
          {pHead.prfss.map((prfs, i) => {
            const pBlock = { adj: pHead.adj, prfs, i };
            return <CapableEle key={i} pBlock={pBlock} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CapableBlock;
