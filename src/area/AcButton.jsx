import useAcRoo from "../convert/useAcRoo.jsx";
import useAcBoo from "../convert/useAcBoo.jsx";
import useAcCol from "../convert/useAcCol.jsx";
import useAcRun from "../convert/useAcRun.jsx";
import useAcLab from "../convert/useAcLab.jsx";
import look from "../style/look.jsx";
import { FaCheck } from "react-icons/fa6";
import { LuTriangleAlert } from "react-icons/lu";

const AcButton = ({ preKey, styleObj }) => {
  const roo = useAcRoo({ preKey });
  const boo = useAcBoo({ preKey });
  const col = useAcCol({ preKey });
  const run = useAcRun({ preKey });
  const lab = useAcLab({ preKey });
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

export default AcButton;
