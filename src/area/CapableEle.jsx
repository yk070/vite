import look from "../style/look.jsx";
import useCtx from "../context/useCtx.jsx";
// import useCapableRoo from "../convert/useCapableRoo.jsx";
import useCapableBoo from "../convert/useCapableBoo.jsx";
import useCapableCol from "../convert/useCapableCol.jsx";
import useCapableRun from "../convert/useCapableRun.jsx";
import useCapableLab from "../convert/useCapableLab.jsx";

const CapableEle = ({ pBlock }) => {
  const ctx = useCtx();
  // const roo = useCapableRoo({ pBlock });
  const boo = useCapableBoo({ pBlock });
  const col = useCapableCol({ pBlock });
  const run = useCapableRun({ pBlock });
  const lab = useCapableLab({ pBlock });

  return (
    <div
      style={look.capable9(col)}
      onClick={run.click}
      onMouseEnter={run.hover}
      onMouseLeave={run.leave}
    >
      <div style={look.capable7(col)} />
    </div>
  );
};

export default CapableEle;
