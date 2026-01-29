import look from "../style/look.jsx";
import useCtx from "../context/useCtx.jsx";
// import useAcLdRoo from "../convert/useAcLdRoo.jsx";
import useAcLdBoo from "../convert/useAcLdBoo.jsx";
import useAcLdCol from "../convert/useAcLdCol.jsx";
import useAcLdRun from "../convert/useAcLdRun.jsx";
import useAcLdLab from "../convert/useAcLdLab.jsx";

const AcLdEle = ({ props }) => {
  const ctx = useCtx();
  // const roo = useAcLdRoo({ props });
  const boo = useAcLdBoo({ props });
  const col = useAcLdCol({ props });
  const run = useAcLdRun({ props });
  const lab = useAcLdLab({ props });

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
