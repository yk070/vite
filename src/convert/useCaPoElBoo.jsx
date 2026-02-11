import useCtx from "../context/useCtx.jsx";
import useCaPoElRoo from "./useCaPoElRoo.jsx";
import look from "../style/look.jsx";
import easyObj from "../obj/easyObj.js";

const useCaPoElBoo = ({ pBl }) => {
  const ctx = useCtx();
  const roo = useCaPoElRoo({ pBl });

  const isHd = ctx.hdPoId === roo.id;
  // const isSd = ctx.acTgsSet.has(`${pBl.prf.ac}|${pBl.prf.tg}`);

  // const isSd = pBl.prfs.every((obj) =>
  //   ctx.acTgsSet.has(`${obj.ac}|${obj.tg}`),
  // );

  // const capableNou = pBl.prf.tg.split("*")[1];
  // const getCircle = () => {
  //   const entry = Object.entries(easyObj[pBl.adj])?.find(([_, nous]) =>
  //     nous?.includes(capableNou),
  //   );
  //   const level = entry?.[0] ?? "third";
  //   if (level === "first") return look.first;
  //   if (level === "second") return look.second;
  //   if (level === "third") return look.third;
  // };

  // const circle = getCircle();
  return {
    isHd,
    // isSd,
  };
};

export default useCaPoElBoo;
