import useCtx from "../context/useCtx.jsx";
const useCaMoBlRoo = ({ pAaa }) => {
  const ctx = useCtx();

  const po3Prfsss = pAaa.moPrfs.map((prf) => {
    const po3Prfss = pAaa.po2Prfss.filter((group) =>
      group.some((item) => item.ac === prf.ac && item.tg === prf.tg),
    );
    return po3Prfss;
  });
  const total = po3Prfsss.reduce((sum, groups) => {
    const count = groups.length;
    return sum + (count === 0 ? 1 : count);
  }, 0);

  const pBl = {
    caAdj: pAaa.caAdj,
    moPrfs: pAaa.moPrfs,
    po3Prfsss: po3Prfsss,
  };
  return { po3Prfsss, total, pBl };
};

export default useCaMoBlRoo;
