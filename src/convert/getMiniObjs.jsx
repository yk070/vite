import tgAdjLdObj from "../obj/tgAdjLdObj.js";

const getMiniObjs = ({ adj, position, blockTitle, smallTitle }) => {
  const mediumObj = tgAdjLdObj?.[adj]?.[position]?.[blockTitle]?.mediumObj;

  return mediumObj?.[smallTitle]?.miniObjs ?? [];
};

export default getMiniObjs;
