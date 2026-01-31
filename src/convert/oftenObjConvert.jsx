import stableObj from "../obj/stableObj.js";

const oftenObjConvert = (adj, blockTitle, smallTitle) => {
  return (
    stableObj?.[adj]?.[blockTitle]?.mediumObj?.[smallTitle]?.miniObjs ?? []
  );
};

export default oftenObjConvert;
