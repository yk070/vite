import multiObj from "../obj/multiObj.jsx";

const getMiniObjs = ({ mod, position, blockTitle, smallTitle }) => {
  const mediumObj = multiObj?.[mod]?.[position]?.[blockTitle]?.mediumObj;

  return mediumObj?.[smallTitle]?.miniObjs ?? [];
};

export default getMiniObjs;
