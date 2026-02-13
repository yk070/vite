import look from "../style/look.jsx";
import useAdjCol from "../convert/useAdjCol.jsx";
import useAdjRun from "../convert/useAdjRun.jsx";
import useAdjRoo from "../convert/useAdjRoo.jsx";
import useAdjBoo from "../convert/useAdjBoo.jsx";
import CaMdAdjEl from "./CaMdAdjEl.jsx";

// const pContent = { moAdjNous, caAdj};
const CaMdAdj = ({ pContent }) => {
  const roo = useAdjRoo({ pContent });
  const boo = useAdjBoo({ pContent });
  const col = useAdjCol({ pContent });
  const run = useAdjRun({ pContent });

  return (
    <div
      style={look.capable8(roo.length)}
      onMouseEnter={run.hover}
      onMouseLeave={run.leave}
    >
      <div style={look.capable15}>
        <div style={look.capable19(col.adj)}>
          <span style={look.capable29}>{pContent.caAdj}</span>
        </div>
        <div style={look.capable21(col.hdBlock)}>
          {roo.moPrfs.map((moPrf, iAdj) => {
            const pAdj = {
              caAdj: pContent.caAdj,
              po3Prfsss: roo.po3Prfsss,
              moPrf,
              iAdj,
              isHd: boo.isHd,
            };
            return <CaMdAdjEl key={iAdj} pAdj={pAdj} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CaMdAdj;
