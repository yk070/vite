import { useState } from "react";
const useMain = () => {
  // ca
  const [hdAdjObj, setHdAdjObj] = useState(null);

  const [hdAdjElObj, setHdAdjElObj] = useState(null);
  const [cdAdjElObj, setCdAdjEleObj] = useState(null);

  const [hdPoAaObj, setHdPoAaObj] = useState(null);
  const [cdPoAaObj, setCdPoAaObj] = useState(null);

  const [toReviseAdj, setToReviseAdj] = useState(null);

  //tg
  const [HoverLocktg, setHoverLocktg] = useState(null);

  // current adj
  const [currCapAc, setCurrCapAc] = useState("none");
  const [currCapTg, setCurrCapTg] = useState("none");

  // selected
  const [cdTgAdjNou, setCdTgAdjNou] = useState(null);
  // ac
  const [cdAcObj, setCdAcObj] = useState(null);

  // hovered
  const [hdAdjNouTg, setHdAdjNouTg] = useState(null);
  const [hdAdjNouAc, setHdAdjNouAc] = useState(null);
  // enter
  const [isEnterSelected, setisEnterSelected] = useState(false);
  return {
    cdPoAaObj,
    setCdPoAaObj,
    cdAcObj,
    setCdAcObj,
    hdPoAaObj,
    setHdPoAaObj,
    toReviseAdj,
    setToReviseAdj,
    hdAdjObj,
    setHdAdjObj,
    currCapAc,
    setCurrCapAc,
    currCapTg,
    setCurrCapTg,
    cdTgAdjNou,
    setCdTgAdjNou,
    hdAdjNouTg,
    setHdAdjNouTg,
    hdAdjNouAc,
    setHdAdjNouAc,
    isEnterSelected,
    setisEnterSelected,
    HoverLocktg,
    setHoverLocktg,
    cdAdjElObj,
    setCdAdjEleObj,
    hdAdjElObj,
    setHdAdjElObj,
  };
};
export default useMain;
