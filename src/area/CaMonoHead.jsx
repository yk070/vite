import look from "../style/look.jsx";
import useCtx from "../context/useCtx.jsx";
import adjNouAdjNousObj from "../obj/adjNouAdjNousObj.js";
import CaMonoBlock from "./CaMonoBlock.jsx";

const CaMonoHead = () => {
  const ctx = useCtx();

  const adjNous = adjNouAdjNousObj[ctx.cdAcAdjNou];
  const adjs = [...new Set(adjNous.map((tg) => tg.split("*")[0]))];
  return (
    <div style={look.capable23}>
      <div style={look.capable26}>
        <div style={look.capable25}>
          <span style={look.capable28}>{"単体"}</span>
        </div>
        <div style={look.capable20}>
          {adjs.map((adj) => {
            const pHead = {
              adj,
              prfs: adjNous
                .filter((tg) => tg.split("*")[0] === adj)
                .map((tg) => ({
                  ac: ctx.cdAcAdjNou,
                  tg,
                })),
            };
            return <CaMonoBlock key={adj} pHead={pHead} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CaMonoHead;
