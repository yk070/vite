import look from "../style/look.jsx";
import useCaMoElCol from "../convert/useCaMoElCol.jsx";
import useCaMoElRun from "../convert/useCaMoElRun.jsx";
import useCaMoElBoo from "../convert/useCaMoElBoo.jsx";
import useCaMoElRoo from "../convert/useCaMoElRoo.jsx";
import CaMdPoLeader from "./CaMdPoLeader.jsx";

// const pHa = { caAdj, po3Prfsss, moPrf, iHa };
const CaMdLeader = ({ pHa }) => {
  const roo = useCaMoElRoo({ pHa });
  const boo = useCaMoElBoo({ pHa });
  const col = useCaMoElCol({ pHa });
  const run = useCaMoElRun({ pHa });
  // console.log(pHa.po3Prfsss[pHa.iHa]);

  return (
    <div
      style={look.capable9(boo.length)}
      onClick={run.click}
      onMouseEnter={run.hover}
      onMouseLeave={run.leave}
    >
      <div style={look.caEl1}>
        <div style={look.caEl2}>
          <div style={look.capable7(col.buttonColor)}>
            <div style={{ ...look.common2, ...boo.circle }} />
          </div>
        </div>
        {boo.isPoPresent && (
          <div style={look.caEl3}>
            <div style={look.caMoEle2}>
              {roo.po3Prfss.map((prfs, iEl) => {
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
        )}
      </div>
    </div>
  );
};

export default CaMdLeader;
