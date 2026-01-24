import useCtx from "../context/useCtx.jsx";
const AlertConvert = (modkey) => {
  const ctx = useCtx();
  const isFunctionUsed = ctx.acTgObjs?.some((actgObj) => actgObj.ac === modkey);
  const isLocationUsed = ctx.acTgObjs?.some((actgObj) => actgObj.tg === modkey);
  const AsReturn = isLocationUsed && !isFunctionUsed;

  return AsReturn;
};

export default AlertConvert;
