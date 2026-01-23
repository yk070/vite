import { useRef } from "react";
import useactgObjs from "./useAcTgObjs.jsx";
import useMultiClickObj from "./useMultiClickObj.jsx";
const useEffectBoss = (base, main) => {
  useactgObjs(base);
  useMultiClickObj(base, main);
};
export default useEffectBoss;
