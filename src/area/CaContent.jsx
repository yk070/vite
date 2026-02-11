import look from "../style/look.jsx";
import useCtx from "../context/useCtx.jsx";
import moObj from "../obj/moObj.js";
import CaBl from "./CaBl.jsx";
import poPrfss from "../obj/poPrfss.js";
const CaContent = () => {
  const ctx = useCtx();

  const moAdjNous = moObj[ctx.cdAcAdjNou];
  const po1Pfrss = poPrfss.filter((prfs) =>
    prfs.some((obj) => obj.ac === ctx.cdAcAdjNou),
  );

  const caAdjs = [...new Set(moAdjNous.map((tg) => tg.split("*")[0]))];

  return (
    <div style={look.capable23}>
      <div style={look.capable26}>
        <div style={look.capable20}>
          {caAdjs.map((caAdj) => {
            const po2Prfss = po1Pfrss.filter((prfs) =>
              prfs.some((obj) => obj.tg.split("*")[0] === caAdj),
            );
            const pAaa = {
              caAdj,
              moPrfs: moAdjNous
                .filter((tg) => tg.split("*")[0] === caAdj)
                .map((tg) => ({
                  ac: ctx.cdAcAdjNou,
                  tg,
                })),
              po2Prfss,
            };
            return <CaBl key={caAdj} pAaa={pAaa} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CaContent;
