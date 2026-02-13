import useCtx from "../context/useCtx.jsx";
import easyObj from "../obj/easyObj.js";
import useAdjEleRoo from "./useAdjEleRoo.jsx";
import look from "../style/look.jsx";

const useAdjEleBoo = ({ pAdj }) => {
  const cx = useCtx();
  const roo = useAdjEleRoo({ pAdj });

  const isTarget2 = JSON.stringify(cx.hdPoAaPrf) === JSON.stringify(pAdj.moPrf);

  const isPoPresent = roo.po3Prfss.length !== 0;

  const isHd = cx.hdAdjElId === roo.id;
  const isSd = cx.acTgsSet?.has(`${pAdj.moPrf?.ac}|${pAdj.moPrf?.tg}`);

  const isZero = pAdj.po3Prfsss[pAdj.iAdj].length === 0;
  const length = isZero ? 1 : pAdj.po3Prfsss[pAdj.iAdj].length;

  // const isSd = pAdj.prfs.every((obj) =>
  //   cx.acTgsSet.has(`${obj.ac}|${obj.tg}`),
  // );

  const capableNou = pAdj.moPrf.tg.split("*")[1];
  const getCircle = () => {
    const entry = Object.entries(easyObj[pAdj.caAdj])?.find(([_, nous]) =>
      nous?.includes(capableNou),
    );
    const level = entry?.[0] ?? "third";
    if (level === "first") return look.first("white");
    if (level === "second") return look.second("white");
    if (level === "third") return look.third("white");
  };
  const circle = getCircle();

  return {
    isTarget2,
    isPoPresent,
    isZero,
    length,
    isHd,
    isSd,
    circle,
  };
};

export default useAdjEleBoo;
