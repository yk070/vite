import { EnterObj } from "../obj/namedObj.js";
import useCtx from "../context/useCtx.jsx";

const useAcRoo = ({ posiId }) => {
  const ctx = useCtx();
  const originKey = EnterObj[posiId] ?? posiId;
  const adjKey = ctx.currentCapAc + "*" + originKey;
  return {
    originKey,
    adjKey,
  };
};

export default useAcRoo;
