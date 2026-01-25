import multiObj from "../obj/multiObj.js";

const oftenObjConvert = (adj, blockTitle, smallTitle) => {
  return multiObj?.[adj]?.[blockTitle]?.mediumObj?.[smallTitle]?.miniObjs ?? [];
};

export default oftenObjConvert;
