import { useState } from "react";
const useStateMain = ({ ctx }) => {
  const [HoverLocktg, setHoverLocktg] = useState(null);

  const [hdMultiObj, setHdMultiObj] = useState(null);

  // current adj
  const [currentCapAc, setcurrentCapAc] = useState("none");
  const [currentAdjTg, setCurrentAdjTg] = useState("none");
  // space hold
  // multi
  const [cdMultiObjs, setCdMultiObj] = useState({});
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
    hdMultiObj,
    setHdMultiObj,
    HoverLocktg,
    setHoverLocktg,
    cdMultiObjs,
    setCdMultiObj,
  };
};
export default useStateMain;
