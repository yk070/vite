import { createContext, useContext } from "react";
import useStateMain from "./useStateMain.js";
import derivedMain from "./derivedMain.js";
import useAcTgObjs from "./useAcTgObjs.js";
import useMultiClickObj from "./useMultiClickObj.js";
import useStateHistory from "./useStateHistory.js";
import derivedScript from "./derivedScript.js";
import derivedArrow from "./derivedArrow.js";
import { useEffect } from "react";
const AppContext = createContext(null);

export const CtxProvider = ({ children }) => {
  const base = {
    ...useStateMain(),
    ...useStateHistory(),
  };
  // console.log(base.acTgObjs);

  const main = derivedMain(base);
  const script = derivedScript(base);
  const arrow = derivedArrow(base, main);

  useAcTgObjs(base);
  useMultiClickObj(base, main);

  // トグルが変わったときに配列を更新
  useEffect(() => {
    base.setAcTgObjs((prev) => {
      // すでに 'spaceHold' があるかチェック
      const hasHold = prev.includes("spaceHold");

      if (base.isWoSpaHold && !hasHold) {
        // オンになったら追加
        return [...prev, "spaceHold"];
      } else if (!base.isWoSpaHold && hasHold) {
        // オフになったら削除
        return prev.filter((item) => item !== "spaceHold");
      }
      return prev; // 変化なし
    });
  }, [base.isWoSpaHold]); // isHold が変わるたびに発動

  return (
    <AppContext.Provider value={{ ...base, ...script, ...main, ...arrow }}>
      {children}
    </AppContext.Provider>
  );
};
const useCtx = () => useContext(AppContext);

export default useCtx;
