import useCtx from "../context/useCtx.jsx";
import poPrfss from "../obj/poPrfss.js";

const useCaMoBlRoo = ({ pCo }) => {
  const ctx = useCtx();

  const moPrfs = pCo.moAdjNous
    .filter((tg) => tg.split("*")[0] === pCo.caAdj)
    .map((tg) => ({
      ac: ctx.cdAcAdjNou,
      tg,
    }));

  const po1Pfrss = poPrfss.filter((prfs) =>
    prfs.some((obj) => obj.ac === ctx.cdAcAdjNou),
  );
  const po2Prfss = po1Pfrss.filter((prfs) =>
    prfs.some((obj) => obj.tg.split("*")[0] === pCo.caAdj),
  );
  const po3Prfsss = moPrfs.map((prf) => {
    const po3Prfss = po2Prfss.filter((group) =>
      group.some((item) => item.ac === prf.ac && item.tg === prf.tg),
    );
    return po3Prfss;
  });
  const length = po3Prfsss.reduce((sum, groups) => {
    const count = groups.length;
    return sum + (count === 0 ? 1 : count);
  }, 0);

  const pBl = {
    caAdj: pCo.caAdj,
    moPrfs,
    po3Prfsss,
  };
  return { moPrfs, po3Prfsss, length, pBl };
};

export default useCaMoBlRoo;
