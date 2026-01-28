import { useState } from "react";
const useStateMain = ({ ctx }) => {
  const [HoverLocktg, setHoverLocktg] = useState(null);

  const [hdmultiObj, setHdmultiObj] = useState(null);

  // current adj
  const [currentCapAc, setcurrentCapAc] = useState("none");
  const [currentAdjTg, setCurrentAdjTg] = useState("none");
  // space hold
  // multi
  const [cdmultiObjs, setCdmultiObj] = useState({});
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
    hdmultiObj,
    setHdmultiObj,
    HoverLocktg,
    setHoverLocktg,
    cdmultiObjs,
    setCdmultiObj,
  };
};
export default useStateMain;
