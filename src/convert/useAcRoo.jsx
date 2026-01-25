import { EnterObj } from "../obj/namedObj.js";
import useCtx from "../context/useCtx.jsx";

const useAcRoo = ({ posiId }) => {
  const ctx = useCtx();
  const originKey = EnterObj[posiId] ?? posiId;
  const adjNou = ctx.currentCapAc + "*" + originKey;
  return {
    originKey,
    adjNou,
  };
};

export default useAcRoo;
