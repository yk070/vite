import stableObj from "../obj/stableObj.js";
const makeMiniObjsConvert = (currAdjTg, blockTitle, smallTitle) => {
  return (
    stableObj?.[currAdjTg]?.[blockTitle]?.mediumObj?.[smallTitle]?.miniObjs ??
    []
  );
};

export default makeMiniObjsConvert;
