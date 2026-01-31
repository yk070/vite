import stableObj from "../obj/stableObj.js";

const getMiniObjs = ({ adj, position, blockTitle, smallTitle }) => {
  const mediumObj = stableObj?.[adj]?.[position]?.[blockTitle]?.mediumObj;

  return mediumObj?.[smallTitle]?.miniObjs ?? [];
};

export default getMiniObjs;
