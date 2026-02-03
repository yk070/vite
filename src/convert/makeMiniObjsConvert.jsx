import stableObj from "../obj/stableObj.js";
const makeMiniObjsConvert = (currCapTg, blockTitle, smallTitle) => {
  return (
    stableObj?.[currCapTg]?.[blockTitle]?.mediumObj?.[smallTitle]?.miniObjs ??
    []
  );
};

export default makeMiniObjsConvert;
