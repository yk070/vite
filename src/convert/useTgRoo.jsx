import { EnterObj } from "../obj/namedObj.js";
import useCtx from "../context/useCtx.jsx";

const useTgRoo = ({ posiId }) => {
  const cx = useCtx();

  const rawNou = EnterObj[posiId] ?? posiId;
  const rawAn = cx.currCapTg + "*" + rawNou;

  const fakeAn = cx.usedPrfs.find((obj) => obj.tg === rawAn)?.ac;

  const mattchedPrf = cx.hdPoAaPrfs?.find((prf) => prf.tg === rawAn);

  const poHdAn = mattchedPrf?.ac;

  return {
    mattchedPrf,
    poHdAn,
    rawNou,
    rawAn,
    fakeAn,
  };
};

export default useTgRoo;
