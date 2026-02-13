import look from "../style/look.jsx";
import CaMdPoEl from "./CaMdPoEl.jsx";
import usePoAaBoo from "../convert/usePoAaBoo.jsx";
import usePoAaCol from "../convert/usePoAaCol.jsx";
import usePoAaRun from "../convert/usePoAaRun.jsx";
import usePoAaRoo from "../convert/usePoAaRoo.jsx";

// const pAdjEl = { caAdj, moPrf, iAdj, prfs, iEl};
const CaMdPoAa = ({ pAdjEl }) => {
  const roo = usePoAaRoo({ pAdjEl });
  const boo = usePoAaBoo({ pAdjEl });
  const col = usePoAaCol({ pAdjEl });
  const run = usePoAaRun({ pAdjEl });

  return (
    <div
      style={look.caMoEle1}
      onMouseEnter={run.hover}
      onMouseLeave={run.leave}
      onClick={run.click}
    >
      <div style={look.caMoEle3(col.buttonColor)}>
        {roo.filteredPrfs.map((prf, i) => {
          const pPoCo = { caAdj: pAdjEl.caAdj, moPrf: pAdjEl.moPrf, prf };
          return <CaMdPoEl key={i} pPoCo={pPoCo} />;
        })}
      </div>
    </div>
  );
};

export default CaMdPoAa;
