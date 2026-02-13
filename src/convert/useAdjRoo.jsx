import useCtx from "../context/useCtx.jsx";
import poPrfss from "../obj/poPrfss.js";

const useAdjRoo = ({ pContent }) => {
  const ctx = useCtx();

  const moPrfs = pContent.moAdjNous
    .filter((tg) => tg.split("*")[0] === pContent.caAdj)
    .map((tg) => ({
      ac: ctx.cdAcAdjNou,
      tg,
    }));

  const po1Pfrss = poPrfss.filter((prfs) =>
    prfs.some((obj) => obj.ac === ctx.cdAcAdjNou),
  );
  const po2Prfss = po1Pfrss.filter((prfs) =>
    prfs.some((obj) => obj.tg.split("*")[0] === pContent.caAdj),
  );
  const po3Prfsss = moPrfs.map((prf) => {
    const po3Prfss = po2Prfss.filter((group) =>
      group.some((item) => JSON.stringify(item) === JSON.stringify(prf)),
    );
    return po3Prfss;
  });
  const length = po3Prfsss.reduce((sum, groups) => {
    const count = groups.length;
    return sum + (count === 0 ? 1 : count);
  }, 0);

  return { moPrfs, po3Prfsss, length };
};

export default useAdjRoo;
