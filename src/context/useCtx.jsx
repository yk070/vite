import { createContext, useContext } from "react";
import useStateMain from "./useStateMain.js";
import derivedMain from "./derivedMain.js";
import useAcTgObjs from "./useAcTgObjs.js";
import useMultiClickObj from "./useMultiClickObj.js";
import useStateHistory from "./useStateHistory.js";
import derivedScript from "./derivedScript.js";
import derivedArrow from "./derivedArrow.jsx";

const AppContext = createContext(null);

export const CtxProvider = ({ children }) => {
  const base = {
    ...useStateMain(),
    ...useStateHistory(),
  };
  console.log(base.acTgObjs);

  const main = derivedMain(base);
  const script = derivedScript(base);
  const arrow = derivedArrow(base, main);

  useAcTgObjs(base);
  useMultiClickObj(base, main);

  return (
    <AppContext.Provider value={{ ...base, ...script, ...main, ...arrow }}>
      {children}
    </AppContext.Provider>
  );
};
const useCtx = () => useContext(AppContext);

export default useCtx;
