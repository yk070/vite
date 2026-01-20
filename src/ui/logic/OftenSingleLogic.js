import AlertConvert from "../convert/AlertConvert.jsx";
import useCtx from "../context/useCtx.jsx";
import OftenSingle from "../area/OftenSingle.jsx";
const OftenSingleLogic = ({ modKey }) => {
  const { hdModKeyAc, sdAcModKey, AcTgObjs, isWoSpaceHold } = useCtx();
  // boolean
  const isActive = sdAcModKey === modKey;
  const isAlert = AlertConvert(AcTgObjs, modKey, isWoSpaceHold);
  const isHd = hdModKeyAc === modKey;
  const isFunctionUsed = AcTgObjs.some((obj) => obj.ac === modKey);

  return {
    isActive,
    isAlert,
    isFunctionUsed,
    isHd,
  };
};

export default OftenSingleLogic;
Fdzaaaaaaaaaaaaaaaaagggaggffddffdddadddffaddfaf