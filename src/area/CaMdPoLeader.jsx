import look from "../style/look.jsx";
import CaMdPoCircle from "./CaMdPoCircle.jsx";
import useCaPoBlBoo from "../convert/useCaPoBlBoo.jsx";
import useCaPoBlCol from "../convert/useCaPoBlCol.jsx";
import useCaPoBlRun from "../convert/useCaPoBlRun.jsx";
import useCaPoBlRoo from "../convert/useCaPoBlRoo.jsx";

// const pEl = { caAdj, moPrf, iHa, prfs, iEl};
const CaMdPoLeader = ({ pEl }) => {
  const roo = useCaPoBlRoo({ pEl });
  const boo = useCaPoBlBoo({ pEl });
  const col = useCaPoBlCol({ pEl });
  const run = useCaPoBlRun({ pEl });

  return (
    <div
      style={look.caMoEle1(col.borderColor)}
      onMouseEnter={run.hover}
      onMouseLeave={run.leave}
    >
      <div style={look.caMoEle3}>
        {pEl.prfs.map((prf, i) => {
          const pPoCo = { caAdj: pEl.caAdj, moPrf: pEl.moPrf, prf };
          return <CaMdPoCircle key={i} pPoCo={pPoCo} />;
        })}
      </div>
    </div>
  );
};

export default CaMdPoLeader;
