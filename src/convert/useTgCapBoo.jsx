import useCtx from "../context/useCtx.jsx";
import { virtualVersatiles } from "../array/namedArray.js";

const useTgBoo = ({ tgCap }) => {
  const cx = useCtx();

  const isSd = tgCap === cx.currCapTg;
  const isFunctionPsHd =
    cx.remoteHdAdj === tgCap && cx.currCapTg !== cx.remoteHdAdj;
  const isVirtual = virtualVersatiles.includes(tgCap);
  return { isSd, isFunctionPsHd, isVirtual };
};

export default useTgBoo;
