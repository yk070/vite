import multiObj from "../obj/multiObj.js";
const makeMiniObjsConvert = (currentModTg, blockTitle, smallTitle) => {
  return (
    multiObj?.[currentModTg]?.[blockTitle]?.mediumObj?.[smallTitle]?.miniObjs ??
    []
  );
};

export default makeMiniObjsConvert;
