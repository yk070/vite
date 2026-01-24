import look from "../style/look.jsx";
import { FaCheck } from "react-icons/fa6";
import { LuTriangleAlert } from "react-icons/lu";
import useBasicLab from "../convert/useBasicLab.jsx";
import useBasicBoo from "../convert/useBasicBoo.jsx";
import useBasicRun from "../convert/useBasicRun.jsx";
import useBasicCol from "../convert/useBasicCol.jsx";
const BasicButton = ({ modKey }) => {
  const boo = useBasicBoo({ modKey });
  const col = useBasicCol({ modKey });
  const run = useBasicRun({ modKey });
  const lab = useBasicLab({ modKey });
  return (
    <div
      style={look.basic5(col)}
      onClick={run.click}
      onMouseEnter={run.hover}
      onMouseLeave={run.leave}
    >
      <div style={look.basic6(col)}>
        <span style={look.BasicButtons1(col)}>{lab.label}</span>
        {boo.isAlert && <LuTriangleAlert style={look.BasicButtons2} />}
        {boo.isFunctionUsed && <FaCheck style={look.BasicButtons3} />}
      </div>
    </div>
  );
};

export default BasicButton;
