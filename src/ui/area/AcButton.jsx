import React from "react";
import useAcRoo from "../convert/useAcRoo.jsx";
import useAcBoo from "../convert/useAcBoo.jsx";
import useAcCol from "../convert/useAcCol.jsx";
import useAcRun from "../convert/useAcRun.jsx";
import useAcLab from "../convert/useAcLab.jsx";
import look from "../style/look.jsx";
import { FaCheck } from "react-icons/fa6";
import { LuTriangleAlert } from "react-icons/lu";
import AcButtons from "./AcButtons.jsx";
const AcButton = ({ ButtonObj }) => {
  const roo = useAcRoo({ ButtonObj });
  const boo = useAcBoo({ ButtonObj });
  const col = useAcCol({ ButtonObj });
  const run = useAcRun({ ButtonObj });
  const lab = useAcLab({ ButtonObj });
  return (
    <div
      style={look.acButton1(roo, col)}
      onClick={run.click}
      onMouseEnter={run.hover}
      onMouseLeave={run.leave}
    >
      <div style={look.acButton2(col)}>
        <span style={look.acButton3}>{lab.label}</span>
        {boo.isAlert && <LuTriangleAlert style={look.acButton4} />}
        {boo.isFunctionUsed && <FaCheck style={look.acButton5} />}
      </div>
    </div>
  );
};

export default AcButton;
