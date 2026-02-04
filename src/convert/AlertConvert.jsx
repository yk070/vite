import useCtx from "../context/useCtx.jsx";
const AlertConvert = (adjkey) => {
  const ctx = useCtx();
  const isFunctionUsed = ctx.prfs?.some((actgObj) => actgObj.ac === adjkey);
  const isLocationUsed = ctx.prfs?.some((actgObj) => actgObj.tg === adjkey);
  const AsReturn = isLocationUsed && !isFunctionUsed;

  return AsReturn;
};

export default AlertConvert;
