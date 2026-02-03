import look from "../style/look.jsx";
import CapableEle from "./CapableEle.jsx";
import useCapableBlockBoo from "../convert/useCapableBlockBoo.jsx";
import useCapableBlockCol from "../convert/useCapableBlockCol.jsx";
import useCapableBlockRun from "../convert/useCapableBlockRun.jsx";
import useCapableBlockRoo from "../convert/useCapableBlockRoo.jsx";
// const pHalf = { title, adj, adjObjss };
const CapableBlock = ({ pHalf }) => {
  const roo = useCapableBlockRoo({ pHalf });
  const boo = useCapableBlockBoo({ pHalf });
  const col = useCapableBlockCol({ pHalf });
  const run = useCapableBlockRun({ pHalf });

  return (
    <div
      style={look.capable8(pHalf.adjObjss.length, col)}
      onMouseEnter={run.hover}
      onMouseLeave={run.leave}
    >
      <div style={look.capable12}>
        <div style={look.capable15}>
          {pHalf.adjObjss.map((adjObjs, i) => {
            const id = `${pHalf.title}${pHalf.adj}${i}`;
            const pBlock = { adj: pHalf.adj, id, adjObjs, i };
            return <CapableEle key={id} pBlock={pBlock} />;
          })}
        </div>
        <div style={look.capable16}>
          {/* <span style={look.capable17}>{pHalf.adj}</span> */}
        </div>
      </div>
    </div>
  );
};

export default CapableBlock;
