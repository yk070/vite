import useCtx from "../context/useCtx.jsx";
const AlertConvert = (adjkey) => {
  const ctx = useCtx();
  const isFunctionUsed = ctx.usedPrfs?.some((actgObj) => actgObj.ac === adjkey);
  const isLocationUsed = ctx.usedPrfs?.some((actgObj) => actgObj.tg === adjkey);
  const AsReturn = isLocationUsed && !isFunctionUsed;

  return AsReturn;
};

export default AlertConvert;
