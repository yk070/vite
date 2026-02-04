import { useState } from "react";
const useMain = () => {
  // stable
  const [hdStableObj, setHdStableObj] = useState(null);
  const [cdStableObjs, setCdStableObjs] = useState({});
  // capable
  const [isCapableAreaHd, setIsCapableAreaHd] = useState(false);
  const [hdCapableBlockObj, setHdCapableBlockObj] = useState(false);
  const [hdCapableObj, setHdCapableObj] = useState(null);
  // console.log(hdCapableObj);
  const [cdCapableObj, setCdCapableObj] = useState(null);

  const [HoverLocktg, setHoverLocktg] = useState(null);

  // current adj
  const [currCapAc, setCurrCapAc] = useState("none");
  const [currCapTg, setCurrCapTg] = useState("none");
  // selected
  const [sdTgAdjNou, setSdTgAdjNou] = useState(null);
  // ac
  const [cdAcAdjNou, setCdAcAdjNou] = useState(null);
  const [hdCapableBlockAdj, setHdCapableBlockAdj] = useState(null);
  // hovered
  const [hdAdjNouTg, setHdAdjNouTg] = useState(null);
  const [hdAdjNouAc, setHdAdjNouAc] = useState(null);
  // enter
  const [isEnterSelected, setisEnterSelected] = useState(false);
  return {
    hdCapableBlockAdj,
    setHdCapableBlockAdj,
    cdAcAdjNou,
    setCdAcAdjNou,
    currCapAc,
    setCurrCapAc,
    currCapTg,
    setCurrCapTg,
    sdTgAdjNou,
    setSdTgAdjNou,
    hdAdjNouTg,
    setHdAdjNouTg,
    hdAdjNouAc,
    setHdAdjNouAc,
    isEnterSelected,
    setisEnterSelected,
    hdStableObj,
    setHdStableObj,
    HoverLocktg,
    setHoverLocktg,
    cdStableObjs,
    setCdStableObjs,
    cdCapableObj,
    setCdCapableObj,
    hdCapableObj,
    setHdCapableObj,
    isCapableAreaHd,
    setIsCapableAreaHd,
    hdCapableBlockObj,
    setHdCapableBlockObj,
  };
};
export default useMain;
