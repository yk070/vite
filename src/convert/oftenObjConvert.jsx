import multiObj from "../obj/multiObj.jsx";

const oftenObjConvert = (mod, blockTitle, smallTitle) => {
  return multiObj?.[mod]?.[blockTitle]?.mediumObj?.[smallTitle]?.miniObjs ?? [];
};

export default oftenObjConvert;
