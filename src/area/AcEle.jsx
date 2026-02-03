import useAcRoo from "../convert/useAcRoo.jsx";
import useAcBoo from "../convert/useAcBoo.jsx";
import useAcCol from "../convert/useAcCol.jsx";
import useAcRun from "../convert/useAcRun.jsx";
import useAcLab from "../convert/useAcLab.jsx";
import look from "../style/look.jsx";
import { FaCheck } from "react-icons/fa6";
import { LuTriangleAlert } from "react-icons/lu";

const AcEle = ({ posiId, styleObj }) => {
  const roo = useAcRoo({ posiId });
  const boo = useAcBoo({ posiId });
  const col = useAcCol({ posiId });
  const run = useAcRun({ posiId });
  const lab = useAcLab({ posiId });
  if (boo.isReturn) return null;
  return (
    <div
      style={look.acButton1(styleObj, col)}
      onClick={run.click}
      onMouseEnter={run.hover}
      onMouseLeave={run.leave}
    >
      <div style={look.acButton2(col)}>
        <span style={look.acButton3(boo)}>{lab.label}</span>
        {boo.isAlert && <LuTriangleAlert style={look.acButton4} />}
        {boo.isFunctionUsed && <FaCheck style={look.acButton5} />}
      </div>
    </div>
  );
};

export default AcEle;
