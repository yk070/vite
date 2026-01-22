import { EnterObj } from "../obj/namedObj.jsx";
import useCtx from "../context/useCtx.jsx";

const useAcRoo = ({ ButtonObj }) => {
  const ctx = useCtx();
  // normal
  const preKey = ButtonObj.key;
  const key = EnterObj[preKey] ?? preKey;
  const modKey = ctx.currentModAc + "*" + key;
  const style = ButtonObj.style;
  return {
    preKey,
    key,
    modKey,
    style,
  };
};

export default useAcRoo;
