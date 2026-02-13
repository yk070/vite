import useCtx from "../context/useCtx.jsx";
const AlertConvert = (adjkey) => {
  const cx = useCtx();
  const isFunctionUsed = cx.usedPrfs?.some((actgObj) => actgObj.ac === adjkey);
  const isLocationUsed = cx.usedPrfs?.some((actgObj) => actgObj.tg === adjkey);
  const AsReturn = isLocationUsed && !isFunctionUsed;

  return AsReturn;
};

export default AlertConvert;
