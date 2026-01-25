import useCtx from "../context/useCtx.jsx";
import multiObj from "../obj/multiObj.js";
import MultiEle from "./MultiEle.jsx";
const MultiEles = () => {
  const ctx = useCtx();
  const currentOftenObj = multiObj[ctx.currentAdjTg] ?? {};
  return (
    <>
      {Object.entries(currentOftenObj).map(([title, objs]) => (
        <MultiEle key={title} title={title} objs={objs} />
      ))}
    </>
  );
};

export default MultiEles;
