import look from "../style/look.jsx";
import useCtx from "../context/useCtx.jsx";
import prfss from "../obj/prfss.js";
import { allAdjs } from "../array/namedArray.js";

const CaPolyHead = () => {
  const ctx = useCtx();

  const matchedPrfss = prfss.filter((prfs) =>
    prfs.some((obj) => obj.ac === ctx.cdAcAdjNou),
  );
  const tgAdjs = [
    ...new Set(matchedPrfss.flat().map((obj) => obj.tg.split("*")[0])),
  ];
  const sortedTgAdjs = allAdjs.filter((adj) => tgAdjs.includes(adj));
  return (
    <div style={look.capable24}>
      <div style={look.capable26}>
        <div style={look.capable25}>
          <span style={look.capable28}>{"複数"}</span>
        </div>
        <div style={look.capable20}>
          {sortedTgAdjs.map((adj) => {
            const filteredPrfss = matchedPrfss.filter(
              (group) => group[0].tg.split("*")[0] === adj,
            );
            const length = filteredPrfss.length;
            return (
              <div key={adj} style={look.capable31(length)}>
                <div style={look.capable15}></div>
              </div>
            );

            // return <CaPolyBlock key={adj} pHead={pHead} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CaPolyHead;
