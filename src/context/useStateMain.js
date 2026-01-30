import { useState } from "react";
const useStateMain = () => {
  const [acLdAdj, setAcLdAdj] = useState(false);
  const [isAcLdHd, setIsAcLdHd] = useState(false);

  const [hdAcLdObj, setHdAcLdObj] = useState(null);
  const [cdAcLdObj, setCdAcLdObjs] = useState(null);

  const [hdAcLdUniqueKey, setHdAcLdUniqueKey] = useState(null);

  const [HoverLocktg, setHoverLocktg] = useState(null);

  const [hdTgAdjLdObj, setHdTgAdjLdObj] = useState(null);

  // current adj
  const [currentCapAc, setcurrentCapAc] = useState("none");
  const [currentAdjTg, setCurrentAdjTg] = useState("none");
  // space hold
  // multi
  const [cdTgAdjLdObj, setCdTgAdjLdObj] = useState({});
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
    hdTgAdjLdObj,
    setHdTgAdjLdObj,
    HoverLocktg,
    setHoverLocktg,
    cdTgAdjLdObj,
    setCdTgAdjLdObj,
    hdAcLdUniqueKey,
    setHdAcLdUniqueKey,
    cdAcLdObj,
    setCdAcLdObjs,
    hdAcLdObj,
    setHdAcLdObj,
    isAcLdHd,
    setIsAcLdHd,
    acLdAdj,
    setAcLdAdj,
  };
};
export default useStateMain;
