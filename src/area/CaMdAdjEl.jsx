import look from "../style/look.jsx";
import useAdjEleCol from "../convert/useAdjEleCol.jsx";
import useAdjEleRun from "../convert/useAdjEleRun.jsx";
import useAdjEleBoo from "../convert/useAdjEleBoo.jsx";
import useAdjEleRoo from "../convert/useAdjEleRoo.jsx";
import CaMdPoAa from "./CaMdPoAa.jsx";

// const pAdj = { caAdj, po3Prfsss, moPrf, iAdj };
const CaMdAdjEl = ({ pAdj }) => {
  const roo = useAdjEleRoo({ pAdj });
  const boo = useAdjEleBoo({ pAdj });
  const col = useAdjEleCol({ pAdj });
  const run = useAdjEleRun({ pAdj });
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
        {boo.isPoPresent && (
          <div style={look.caEl3}>
            <div style={look.caMoEle2}>
              {roo.po3Prfss.map((prfs, iEl) => {
                const pAdjEl = {
                  caAdj: pAdj.caAdj,
                  moPrf: pAdj.moPrf,
                  iAdj: pAdj.iAdj,
                  prfs,
                  iEl,
                };

                return <CaMdPoAa key={iEl} pAdjEl={pAdjEl} />;
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaMdAdjEl;
