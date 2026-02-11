import look from "../style/look.jsx";
import useCaMoBlCol from "../convert/useCaMoBlCol.jsx";
import useCaMoBlRun from "../convert/useCaMoBlRun.jsx";
import useCaMoBlRoo from "../convert/useCaMoBlRoo.jsx";
import useCaMoBlBoo from "../convert/useCaMoBlBoo.jsx";
import CaHa from "./CaHa.jsx";

// const pAaa = { caAdj, moPrfs, po2Prfss};
const CaBl = ({ pAaa }) => {
  const roo = useCaMoBlRoo({ pAaa });
  const boo = useCaMoBlBoo({ pAaa });
  const col = useCaMoBlCol({ pAaa });
  const run = useCaMoBlRun({ pAaa });

  return (
    <div
      style={look.capable8(roo.total)}
      onMouseEnter={run.hover}
      onMouseLeave={run.leave}
    >
      <div style={look.capable15}>
        <div style={look.capable19(col.adj)}>
          <span style={look.capable29}>{pAaa.caAdj}</span>
        </div>
        <div style={look.caMoBl1}>
          <div style={look.capable21(col.hdBlock)}>
            <CaHa pBl={roo.pBl} isMo={true} />
          </div>
          <div style={look.caMoBl2}>
            <CaHa pBl={roo.pBl} isMo={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaBl;
