import look from "../style/look.jsx";
import useCaMoElCol from "../convert/useCaMoElCol.jsx";
import useCaMoElRun from "../convert/useCaMoElRun.jsx";
import useCaMoElBoo from "../convert/useCaMoElBoo.jsx";
import useCaMoElRoo from "../convert/useCaMoElRoo.jsx";
import CaPo from "./CaPo.jsx";

// const pHa = { caAdj, po3Prfsss, moPrf, i, isMo};
const CaEl = ({ pHa }) => {
  const roo = useCaMoElRoo({ pHa });
  const boo = useCaMoElBoo({ pHa });
  const col = useCaMoElCol({ pHa });
  const run = useCaMoElRun({ pHa });

  return (
    <div
      style={look.capable9(col.borderColor, boo.length)}
      onClick={run.click}
      onMouseEnter={run.hover}
      onMouseLeave={run.leave}
    >
      <div style={look.capable7(col.buttonColor)}>
        {pHa.isMo && <div style={{ ...look.common2, ...boo.circle }} />}
        <div style={look.caMoEle2}>
          {!pHa.isMo &&
            pHa.po3Prfsss[pHa.i].map((prfs, i) => {
              return (
                <div key={i} style={look.caMoEle1}>
                  <div style={look.caMoEle3}>
                    {prfs.map((prf, i) => {
                      const pEl = { prf, caAdj: pHa.caAdj, moPrf: pHa.moPrf };
                      return <CaPo key={i} pEl={pEl} />;
                    })}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default CaEl;
