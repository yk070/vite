import { EnterObj } from "../obj/namedObj.js";
import useCtx from "../context/useCtx.jsx";

const useAcRoo = ({ preKey }) => {
  const ctx = useCtx();
  const originKey = EnterObj[preKey] ?? preKey;
  const modKey = ctx.currentModAc + "*" + originKey;
  return {
    originKey,
    modKey,
  };
};

export default useAcRoo;
