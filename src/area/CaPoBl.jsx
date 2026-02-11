import look from "../style/look.jsx";
import useCaPoBlCol from "../convert/useCaPoBlCol.jsx";
import useCaPoBlRun from "../convert/useCaPoBlRun.jsx";
import useCaPoBlBoo from "../convert/useCaPoBlBoo.jsx";
import useCaPoBlRoo from "../convert/useCaPoBlRoo.jsx";
import useCtx from "../context/useCtx.jsx";
import CaPoEle from "./CaPoEle.jsx";

// const pAaa = { adj, matchedPrfss };
const CaPoBl = ({ pAaa }) => {
  const ctx = useCtx();

  const roo = useCaPoBlRoo({ pAaa });
  const boo = useCaPoBlBoo({ pAaa });
  const col = useCaPoBlCol({ pAaa });
  const run = useCaPoBlRun({ pAaa });

  return (
    <div
      style={look.capable8(roo.length)}
      onMouseEnter={run.hover}
      onMouseLeave={run.leave}
    >
      <div style={look.capable15}>
        <div style={look.capable19(col.adj)}>
          <span style={look.capable29}>{pAaa.adj}</span>
        </div>
        <div style={look.capable21(col.hdBl)}>
          {roo.filteredPrfss?.map((prfs, i) => {
            const pBl = { adj: pAaa.adj, prfs, i };
            return <CaPoEle key={i} pBl={pBl} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CaPoBl;

{
  /* <div key={adj} style={look.capable31(length)}>
  <div style={look.capable15}> */
}
{
  /* <div style={look.capable19(col.adj)}>
          <span style={look.capable29}>{adj}</span>
        </div> */
}
{
  /* <div style={look.capable21(col.hdBl)}>
          {pAaa.prfs.map((prf, i) => {
            const pBl = { adj: pAaa.adj, prf, i };
            return <CaEl key={i} pBl={pBl} />;
          })}
        </div> */
}
//   </div>
// </div>;
