import tgAdjLdObj from "../obj/tgAdjLdObj.js";

const oftenObjConvert = (adj, blockTitle, smallTitle) => {
  return (
    tgAdjLdObj?.[adj]?.[blockTitle]?.mediumObj?.[smallTitle]?.miniObjs ?? []
  );
};

export default oftenObjConvert;
