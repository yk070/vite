import look from "../style/look.jsx";
import useCtx from "../context/useCtx.jsx";
// import useCapableRoo from "../convert/useCapableRoo.jsx";
import useCapableBoo from "../convert/useCapableBoo.jsx";
import useCapableCol from "../convert/useCapableCol.jsx";
import useCapableRun from "../convert/useCapableRun.jsx";
import useCapableLab from "../convert/useCapableLab.jsx";

const CapableEle = ({ props2 }) => {
  const ctx = useCtx();
  // const roo = useCapableRoo({ props2 });
  const boo = useCapableBoo({ props2 });
  const col = useCapableCol({ props2 });
  const run = useCapableRun({ props2 });
  const lab = useCapableLab({ props2 });

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
