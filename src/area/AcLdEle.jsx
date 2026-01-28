import look from "../style/look.jsx";
import { FaCheck } from "react-icons/fa6";
import { LuTriangleAlert } from "react-icons/lu";
import useBasicLab from "../convert/useBasicLab.jsx";
import useBasicBoo from "../convert/useBasicBoo.jsx";
import useBasicRun from "../convert/useBasicRun.jsx";
import useBasicCol from "../convert/useBasicCol.jsx";
const AcLdEle = ({ adjNou }) => {
  const boo = useBasicBoo({ adjNou });
  const col = useBasicCol({ adjNou });
  const run = useBasicRun({ adjNou });
  const lab = useBasicLab({ adjNou });
  return (
    <div
      style={look.acLd4(col)}
      onClick={run.click}
      onMouseEnter={run.hover}
      onMouseLeave={run.leave}
    >
      <div style={look.basic6(col)}>
        <span style={look.BasicButtons1(col)}>{"a"}</span>
        {boo.isAlert && <LuTriangleAlert style={look.BasicButtons2} />}
        {boo.isFunctionUsed && <FaCheck style={look.BasicButtons3} />}
      </div>
    </div>
  );
};

export default AcLdEle;
