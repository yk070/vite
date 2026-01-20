
const Cv_SgIdMoKy_SgTxKy = (SgIdMoKy) => {
  const [SgIdMo, SgIdKy] = SgIdMoKy.split("*");
  const Sc_prefix = Oj_SgIdMo_SgPf[SgIdMo] ?? "";
  const SgTxKy = Oj_SgIdKy_SgTxKy[SgIdKy];
  return SgTxKy;
};
export default Cv_SgIdMoKy_SgTxKy;