import useCtx from "../context/useCtx.jsx";
import tgAdjLdObj from "../obj/tgAdjLdObj.js";
import TgAdjLdEle from "./TgAdjLdEle.jsx";
const TgAdjLdEles = () => {
  const ctx = useCtx();
  return (
    <>
      {Object.entries(tgAdjLdObj[ctx.currentAdjTg]).map(([title, objs]) => (
        <TgAdjLdEle key={title} title={title} objs={objs} />
      ))}
    </>
  );
};

export default TgAdjLdEles;
