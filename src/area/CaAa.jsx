import look from "../style/look.jsx";
import useCtx from "../context/useCtx.jsx";
import CaContent from "./CaContent.jsx";
import CaPoAaa from "./CaPoAaa.jsx";

const CaAa = () => {
  const ctx = useCtx();
  if (!ctx.isWoAcSd) return null;

  const click = () => {
    ctx.setCdAcObj(null);
  };

  return (
    <div style={look.ac6}>
      <div style={look.ac8} onClick={click}></div>
      <div style={look.ac7}>
        <div style={look.capable13}>
          <span style={look.capable27}> {ctx.cdAcAdjNou}</span>
        </div>
        <div style={look.capable12}>
          <CaContent />
        </div>
      </div>
    </div>
  );
};

export default CaAa;

// const groupedPrfsss = Object.values(
//   matchedPrfss.reduce((acc, prfs) => {
//     const key = prfs[0].tg.split("*")[0];

//     if (!acc[key]) acc[key] = [];
//     acc[key].push(prfs); // ← ここが重要（[]を付けない）

//     return acc;
//   }, {}),
// );

// const sortedGroupedPrfsss = allAdjs
//   .map((adj) =>
//     groupedPrfsss.find((group) => group[0][0].tg.split("*")[0] === adj),
//   )
//   .filter(Boolean);
