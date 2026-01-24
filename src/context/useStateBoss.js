import { useState } from "react";
const useStateBoss = () => {
  const [AcTgObjs, setAcTgObjs] = useState([]);
  console.log("AcTgObjs", AcTgObjs);
  const [HoverLocktg, setHoverLocktg] = useState(null);

  const [hdMultiObj, setHdMultiObj] = useState(null);

  // current mod
  const [currentModAc, setCurrentModAc] = useState("basic1");
  const [currentModTg, setcurrentModTg] = useState("none");
  // space hold
  const [isWoSpaHold, setIsWoSpaHold] = useState(false);
  const [isWoMuhHold, setIsWoMuhHold] = useState(false);
  // multi
  const [cdMultiObjs, setCdMultiObj] = useState({});
  // selected
  const [sdAcModKey, setSdAcModKey] = useState(null);
  const [sdTgModKey, setSdTgModKey] = useState(null);
  // ac-Tg
  // hovered
  const [hdModKeyTg, setHdModKeyTg] = useState(null);
  const [hdModKeyAc, setHdModKeyAc] = useState(null);
  // enter
  const [isEnterSelected, setisEnterSelected] = useState(false);
  return {
    currentModAc,
    setCurrentModAc,
    currentModTg,
    setcurrentModTg,
    isWoSpaHold,
    setIsWoSpaHold,
    sdAcModKey,
    setSdAcModKey,
    sdTgModKey,
    setSdTgModKey,
    AcTgObjs,
    setAcTgObjs,
    hdModKeyTg,
    setHdModKeyTg,
    hdModKeyAc,
    setHdModKeyAc,
    isEnterSelected,
    setisEnterSelected,
    hdMultiObj,
    setHdMultiObj,
    HoverLocktg,
    setHoverLocktg,
    cdMultiObjs,
    setCdMultiObj,
    isWoMuhHold,
    setIsWoMuhHold,
  };
};
export default useStateBoss;
