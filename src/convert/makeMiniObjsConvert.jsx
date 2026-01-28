import tgAdjLdObj from "../obj/tgAdjLdObj.js";
const makeMiniObjsConvert = (currentAdjTg, blockTitle, smallTitle) => {
  return (
    tgAdjLdObj?.[currentAdjTg]?.[blockTitle]?.mediumObj?.[smallTitle]
      ?.miniObjs ?? []
  );
};

export default makeMiniObjsConvert;
