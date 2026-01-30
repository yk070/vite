import look from "../style/look.jsx";
import useCtx from "../context/useCtx.jsx";
// import useAcLdRoo from "../convert/useAcLdRoo.jsx";
import useAcLdBoo from "../convert/useAcLdBoo.jsx";
import useAcLdCol from "../convert/useAcLdCol.jsx";
import useAcLdRun from "../convert/useAcLdRun.jsx";
import useAcLdLab from "../convert/useAcLdLab.jsx";

const AcLdEle = ({ props2 }) => {
  const ctx = useCtx();
  // const roo = useAcLdRoo({ props2 });
  const boo = useAcLdBoo({ props2 });
  const col = useAcLdCol({ props2 });
  const run = useAcLdRun({ props2 });
  const lab = useAcLdLab({ props2 });

  return (
    <div
      style={look.acLd9(col)}
      onClick={run.click}
      onMouseEnter={run.hover}
      onMouseLeave={run.leave}
    >
      <div style={look.acLd7} />
    </div>
  );
};

export default AcLdEle;
