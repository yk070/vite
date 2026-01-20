import multiObj from "../obj/multiObj.jsx";
const makeMiniObjsConvert = (currentModTg, blockTitle, smallTitle) => {
  return (
    multiObj?.[currentModTg]?.[blockTitle]?.mediumObj?.[smallTitle]?.miniObjs ??
    []
  );
};

export default makeMiniObjsConvert;
