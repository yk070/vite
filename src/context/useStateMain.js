import { useState } from "react";
const useStateMain = () => {
  const [HoverLocktg, setHoverLocktg] = useState(null);

  const [hdMultiObj, setHdMultiObj] = useState(null);

  // current mod
  const [currentModAc, setCurrentModAc] = useState("none");
  const [currentModTg, setCurrentModTg] = useState("none");
  // space hold
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
    setCurrentModTg,
    sdAcModKey,
    setSdAcModKey,
    sdTgModKey,
    setSdTgModKey,
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
  };
};
export default useStateMain;
