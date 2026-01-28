import useCtx from "../context/useCtx.jsx";
import tgAdjLdObj from "../obj/tgAdjLdObj.js";
import TgAdjLdEle from "./TgAdjLdEle.jsx";
const TgAdjLdEles = () => {
  const ctx = useCtx();
  const currentOftenObj = tgAdjLdObj[ctx.currentAdjTg] ?? {};
  return (
    <>
      {Object.entries(currentOftenObj).map(([title, objs]) => (
        <TgAdjLdEle key={title} title={title} objs={objs} />
      ))}
    </>
  );
};

export default TgAdjLdEles;
