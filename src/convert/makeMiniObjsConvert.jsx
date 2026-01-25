import multiObj from "../obj/multiObj.js";
const makeMiniObjsConvert = (currentAdjTg, blockTitle, smallTitle) => {
  return (
    multiObj?.[currentAdjTg]?.[blockTitle]?.mediumObj?.[smallTitle]?.miniObjs ??
    []
  );
};

export default makeMiniObjsConvert;
