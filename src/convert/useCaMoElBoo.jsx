import useCtx from "../context/useCtx.jsx";
import easyObj from "../obj/easyObj.js";
import useCaMoElRoo from "./useCaMoElRoo.jsx";
import look from "../style/look.jsx";

const useCaMoElBoo = ({ pHa }) => {
  const ctx = useCtx();
  const roo = useCaMoElRoo({ pHa });

  const isHd = ctx.hdMoId === roo.id;
  const isSd = ctx.acTgsSet?.has(`${pHa.moPrf?.ac}|${pHa.moPrf?.tg}`);

  const isZero = pHa.po3Prfsss[pHa.iHa].length === 0;
  const length = isZero ? 1 : pHa.po3Prfsss[pHa.iHa].length;

  // const isSd = pHa.prfs.every((obj) =>
  //   ctx.acTgsSet.has(`${obj.ac}|${obj.tg}`),
  // );

  const capableNou = pHa.moPrf.tg.split("*")[1];
  const getCircle = () => {
    const entry = Object.entries(easyObj[pHa.caAdj])?.find(([_, nous]) =>
      nous?.includes(capableNou),
    );
    const level = entry?.[0] ?? "third";
    if (level === "first") return look.first("white");
    if (level === "second") return look.second("white");
    if (level === "third") return look.third("white");
  };
  const circle = getCircle();

  return {
    isZero,
    length,
    isHd,
    isSd,
    circle,
  };
};

export default useCaMoElBoo;
