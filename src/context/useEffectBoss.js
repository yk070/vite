import { useRef } from "react";
import useactgObjs from "./useAcTgObjs.jsx";
import useMultiClickObj from "./useMultiClickObj.jsx";
const useEffectBoss = (base, derived) => {
  useactgObjs(base);
  useMultiClickObj(base, derived);
};
export default useEffectBoss;
