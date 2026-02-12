import look from "../style/look.jsx";
import useCaMoBlCol from "../convert/useCaMoBlCol.jsx";
import useCaMoBlRun from "../convert/useCaMoBlRun.jsx";
import useCaMoBlRoo from "../convert/useCaMoBlRoo.jsx";
import useCaMoBlBoo from "../convert/useCaMoBlBoo.jsx";
import CaMdLeader from "./CaMdLeader.jsx";

// const pCo = { moAdjNous, caAdj};
const CaMdAdj = ({ pCo }) => {
  const roo = useCaMoBlRoo({ pCo });
  const boo = useCaMoBlBoo({ pCo });
  const col = useCaMoBlCol({ pCo });
  const run = useCaMoBlRun({ pCo });

  return (
    <div
      style={look.capable8(roo.length)}
      onMouseEnter={run.hover}
      onMouseLeave={run.leave}
    >
      <div style={look.capable15}>
        <div style={look.capable19(col.adj)}>
          <span style={look.capable29}>{pCo.caAdj}</span>
        </div>
        <div style={look.capable21(col.hdBlock)}>
          {roo.moPrfs.map((moPrf, iHa) => {
            const pHa = {
              caAdj: pCo.caAdj,
              po3Prfsss: roo.po3Prfsss,
              moPrf,
              iHa,
            };
            return <CaMdLeader key={iHa} pHa={pHa} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CaMdAdj;
