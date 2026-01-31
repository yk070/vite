import look from "../style/look.jsx";
import useStableBoo from "../convert/useStableBoo.jsx";
import useStableRun from "../convert/useStableRun.jsx";
import useStableCol from "../convert/useStableCol.jsx";

const StableEle = ({ props }) => {
  const boo = useStableBoo({ props });
  const col = useStableCol({ boo });
  const run = useStableRun({ props });

  return (
    <div
      style={look.OftenHalf1(col)}
      onClick={run.click}
      onMouseEnter={run.hover}
      onMouseLeave={run.leave}
    >
      <div style={look.OftenHalf2(col)}>
        <span style={look.multi1}>{props.title}</span>
      </div>
    </div>
  );
};

export default StableEle;
