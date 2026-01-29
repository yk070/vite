import look from "../style/look.jsx";
import useTgAdjLdBoo from "../convert/useTgAdjLdBoo.jsx";
import useTgAdjLdRun from "../convert/useTgAdjLdRun.jsx";
import useTgAdjLdCol from "../convert/useTgAdjLdCol.jsx";

const TgAdjLdEle = ({ props }) => {
  const boo = useTgAdjLdBoo({ props });
  const col = useTgAdjLdCol({ boo });
  const run = useTgAdjLdRun({ props });

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

export default TgAdjLdEle;
