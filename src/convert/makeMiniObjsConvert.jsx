import stableObj from "../obj/stableObj.js";
const makeMiniObjsConvert = (currentAdjTg, blockTitle, smallTitle) => {
  return (
    stableObj?.[currentAdjTg]?.[blockTitle]?.mediumObj?.[smallTitle]
      ?.miniObjs ?? []
  );
};

export default makeMiniObjsConvert;
