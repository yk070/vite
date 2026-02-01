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
  const [currentCapAc, setcurrentCapAc] = useState("none");
  const [currentAdjTg, setCurrentAdjTg] = useState("none");
  // selected
  const [sdAcAdjNou, setSdAcAdjNou] = useState(null);
  const [sdTgAdjNou, setSdTgAdjNou] = useState(null);
  // ac-Tg
  // hovered
  const [hdAdjNouTg, setHdAdjNouTg] = useState(null);
  const [hdAdjNouAc, setHdAdjNouAc] = useState(null);
  // enter
  const [isEnterSelected, setisEnterSelected] = useState(false);
  return {
    currentCapAc,
    setcurrentCapAc,
    currentAdjTg,
    setCurrentAdjTg,
    sdAcAdjNou,
    setSdAcAdjNou,
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
