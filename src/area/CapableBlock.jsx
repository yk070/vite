import look from "../style/look.jsx";
import CapableEle from "./CapableEle.jsx";
import useCapableBlockCol from "../convert/useCapableBlockCol.jsx";
import useCapableBlockRun from "../convert/useCapableBlockRun.jsx";
import useCapableBlockRoo from "../convert/useCapableBlockRoo.jsx";
import useCapableBlockBoo from "../convert/useCapableBlockBoo.jsx";

// const pHead = { adj, prfss };
const CapableBlock = ({ pHead }) => {
  const roo = useCapableBlockRoo({ pHead });
  const boo = useCapableBlockBoo({ pHead });
  const col = useCapableBlockCol({ pHead });
  const run = useCapableBlockRun({ pHead });

  return (
    <div
      style={look.capable8(pHead.prfs.length)}
      onMouseEnter={run.hover}
      onMouseLeave={run.leave}
    >
      <div style={look.capable15}>
        <div style={look.capable19(col.adj)}>
          <span style={look.capable29}>{pHead.adj}</span>
        </div>
        <div style={look.capable21(col.hdBlock)}>
          {pHead.prfs.map((prf, i) => {
            const pBlock = { adj: pHead.adj, prf, i };
            return <CapableEle key={i} pBlock={pBlock} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CapableBlock;
