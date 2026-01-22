import { ImportantModKeys } from "../array/namedModKeys.jsx";

const AlertConvert = (AcTgObjs, modkey, isWoSpaceHold) => {
  const isFunctionUsed = AcTgObjs?.some((actgObj) => actgObj.ac === modkey);
  const isSpaceFunctionUsed = AcTgObjs?.some(
    (actgObj) => actgObj.ac === "none*space"
  );
  const isLocationUsed = AcTgObjs?.some((actgObj) => actgObj.tg === modkey);
  const isSoSpaceHold = isWoSpaceHold && modkey === "none*space";
  const AsReturn =
    (isSoSpaceHold && !isSpaceFunctionUsed) ||
    (isLocationUsed && !isFunctionUsed && ImportantModKeys.includes(modkey));

  return AsReturn;
};

export default AlertConvert;
