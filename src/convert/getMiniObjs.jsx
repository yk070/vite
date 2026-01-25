import multiObj from "../obj/multiObj.js";

const getMiniObjs = ({ adj, position, blockTitle, smallTitle }) => {
  const mediumObj = multiObj?.[adj]?.[position]?.[blockTitle]?.mediumObj;

  return mediumObj?.[smallTitle]?.miniObjs ?? [];
};

export default getMiniObjs;
