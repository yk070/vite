import { EnterObj } from "../obj/namedObj.js";
import useCtx from "../context/useCtx.jsx";

const useAcRoo = ({ posiId }) => {
  const cx = useCtx();
  const rawNou = EnterObj[posiId] ?? posiId;
  const adjNou = cx.currCapAc + "*" + rawNou;
  return {
    rawNou,
    adjNou,
  };
};

export default useAcRoo;
