import useCtx from "../context/useCtx.jsx";
const useBasicBoo = ({ adjNou }) => {
  const cx = useCtx();

  const isActive = cx.cdAcAn === adjNou;
  const isHd = cx.hdAnAc === adjNou;

  const isFunctionUsed = cx.usedPrfs?.some((actgObj) => actgObj.ac === adjNou);
  const isLocationUsed = cx.usedPrfs?.some((actgObj) => actgObj.tg === adjNou);
  const isAlert = isLocationUsed && !isFunctionUsed;

  return { isActive, isHd, isAlert, isFunctionUsed };
};

export default useBasicBoo;
