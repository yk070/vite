import look from "../style/look.jsx";
import useCapableBoo from "../convert/useCapableBoo.jsx";
import useCapableCol from "../convert/useCapableCol.jsx";
import useCapableRun from "../convert/useCapableRun.jsx";
import CapableCircle from "./CapableCircle.jsx";
// const pBlock = { adj: pHalf.adj, id, adjObjs, i };
const CapableEle = ({ pBlock }) => {
  const boo = useCapableBoo({ pBlock });
  const col = useCapableCol({ pBlock });
  const run = useCapableRun({ pBlock });

  return (
    <div
      style={look.capable9(col)}
      onClick={run.click}
      onMouseEnter={run.hover}
      onMouseLeave={run.leave}
    >
      <div style={look.capable7(col)}>
        {pBlock.adjObjs.map((adjObj, i) => {
          const pEle = { adj: pBlock.adj, adjObj, color: col.borderColor };
          return <CapableCircle key={i} pEle={pEle} />;
        })}
      </div>
    </div>
  );
};

export default CapableEle;
