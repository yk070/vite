import { EnterObj } from "../obj/namedObj.js";
import useCtx from "../context/useCtx.jsx";

const useAcRoo = ({ posiId }) => {
  const ctx = useCtx();
  const originNou = EnterObj[posiId] ?? posiId;
  const adjNou = ctx.currCapAc + "*" + originNou;
  return {
    originNou,
    adjNou,
  };
};

export default useAcRoo;
