import multiObj from "../obj/multiObj.js";

const oftenObjConvert = (mod, blockTitle, smallTitle) => {
  return multiObj?.[mod]?.[blockTitle]?.mediumObj?.[smallTitle]?.miniObjs ?? [];
};

export default oftenObjConvert;
