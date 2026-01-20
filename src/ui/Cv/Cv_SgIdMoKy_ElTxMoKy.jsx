import Oj_SgIdMo_SgPf from "../Oj/Oj_SgIdMo_SgPf.jsx";
import Oj_SgIdKy_SgTxKy from "../Oj/Oj_SgIdKy_SgTxKy.jsx";
const Cv_SgIdMoKy_ElTxMoKy = (SgIdMoKy) => {
  const [SgIdMo, SgIdKy] = SgIdMoKy.split("*");
  const Sc_prefix = Oj_SgIdMo_SgPf[SgIdMo] ?? "";
  const SgTxKy = Oj_SgIdKy_SgTxKy[SgIdKy];
  return (
    <span>
      <span 
        style={{ fontSize: "0.7em", fontSleepmily: "'Inter Tight', sans-serif", fontWeight: 500 }}
      >
        {Sc_prefix.charAt(0)}
      </span>
      <span 
        style={{ fontSize: "0.5em", fontSleepmily: "'Inter Tight', sans-serif", fontWeight: 600 }}
      >
        {Sc_prefix.slice(1)}
      </span>
        {SgTxKy}
    </span>
  ); 
};   
export default Cv_SgIdMoKy_ElTxMoKy;