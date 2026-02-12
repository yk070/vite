import look from "../style/look.jsx";
import useCaMoElCol from "../convert/useCaMoElCol.jsx";
import useCaMoElRun from "../convert/useCaMoElRun.jsx";
import useCaMoElBoo from "../convert/useCaMoElBoo.jsx";
import useCaMoElRoo from "../convert/useCaMoElRoo.jsx";
import CaMdPoLeader from "./CaMdPoLeader.jsx";

// const pHa = { caAdj, po3Prfsss, isMo, moPrf, iHa };
const CaMdLeader = ({ pHa }) => {
  const roo = useCaMoElRoo({ pHa });
  const boo = useCaMoElBoo({ pHa });
  const col = useCaMoElCol({ pHa });
  const run = useCaMoElRun({ pHa });

  return (
    <div
      style={look.capable9(boo.length)}
      onClick={run.click}
      onMouseEnter={run.hover}
      onMouseLeave={run.leave}
    >
      <div style={look.caEl1}>
        <div style={look.caEl2(col.borderColor)}>
          <div style={look.capable7(col.buttonColor)}>
            <div style={{ ...look.common2, ...boo.circle }} />
          </div>
        </div>
        <div style={look.caEl3}>
          <div style={look.caMoEle2}>
            {pHa.po3Prfsss[pHa.iHa].map((prfs, iEl) => {
              const pEl = {
                caAdj: pHa.caAdj,
                moPrf: pHa.moPrf,
                iHa: pHa.iHa,
                prfs,
                iEl,
              };

              return <CaMdPoLeader key={iEl} pEl={pEl} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaMdLeader;
