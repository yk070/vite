import look from "../style/look.jsx";
import useCtx from "../context/useCtx.jsx";
import moObj from "../obj/moObj.js";
import CaMdAdj from "./CaMdAdj.jsx";
const CaContent = () => {
  const cx = useCtx();

  const moAns = moObj[cx.cdAcAn];
  const caAdjs = [...new Set(moAns.map((tg) => tg.split("*")[0]))];

  return (
    <div style={look.capable23}>
      <div style={look.capable26}>
        <div style={look.capable20}>
          {caAdjs.map((caAdj) => {
            const pContent = {
              moAns,
              caAdj,
            };
            return <CaMdAdj key={caAdj} pContent={pContent} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CaContent;
