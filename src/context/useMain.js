import { useState } from "react";
const useMain = () => {
  ////////// ca
  // Adj
  const [hdAdjObj, setHdAdjObj] = useState(null);
  // AdjEl
  const [hdAdjElObj, setHdAdjElObj] = useState(null);
  const [cdAdjElObj, setCdAdjElObj] = useState(null);
  // Po
  const [hdPoObj, setHdPoObj] = useState(null);
  const [cdPoObj, setCdPoObj] = useState(null);
  //
  const [toReviseAdj, setToReviseAdj] = useState(null);
  //////////
  //tg
  const [HoverLocktg, setHoverLocktg] = useState(null);

  // current adj
  const [currCapAc, setCurrCapAc] = useState("none");
  const [currCapTg, setCurrCapTg] = useState("none");

  // selected
  const [cdTgAn, setCdTgAn] = useState(null);
  // ac
  const [cdAcObj, setCdAcObj] = useState(null);

  // hovered
  const [hdAnTg, setHdAnTg] = useState(null);
  const [hdAnAc, setHdAnAc] = useState(null);
  // enter
  const [isEnterSelected, setisEnterSelected] = useState(false);
  return {
    cdPoObj,
    setCdPoObj,
    cdAcObj,
    setCdAcObj,
    hdPoObj,
    setHdPoObj,
    toReviseAdj,
    setToReviseAdj,
    hdAdjObj,
    setHdAdjObj,
    currCapAc,
    setCurrCapAc,
    currCapTg,
    setCurrCapTg,
    cdTgAn,
    setCdTgAn,
    hdAnTg,
    setHdAnTg,
    hdAnAc,
    setHdAnAc,
    isEnterSelected,
    setisEnterSelected,
    HoverLocktg,
    setHoverLocktg,
    cdAdjElObj,
    setCdAdjElObj,
    hdAdjElObj,
    setHdAdjElObj,
  };
};
export default useMain;
