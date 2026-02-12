import look from "../style/look.jsx";
import useCtx from "../context/useCtx.jsx";
import moObj from "../obj/moObj.js";
import CaMdAdj from "./CaMdAdj.jsx";
const CaCo = () => {
  const ctx = useCtx();

  const moAdjNous = moObj[ctx.cdAcAdjNou];
  const caAdjs = [...new Set(moAdjNous.map((tg) => tg.split("*")[0]))];

  return (
    <div style={look.capable23}>
      <div style={look.capable26}>
        <div style={look.capable20}>
          {caAdjs.map((caAdj) => {
            const pCo = {
              moAdjNous,
              caAdj,
            };
            return <CaMdAdj key={caAdj} pCo={pCo} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CaCo;
