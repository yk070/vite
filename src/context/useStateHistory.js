import { useRef, useState } from "react";

const useStateHistory = () => {
  const [isWoSpaHold, setIsWoSpaHold] = useState(false);
  // console.log("isWoSpaHold", isWoSpaHold);
  // muhenkan hold
  const [isWoMuhHold, setIsWoMuhHold] = useState(false);

  const [acTgObjs, _setAcTgObjs] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(0); // ←初期は0
  const historyRef = useRef([[]]); // ←初期状態も履歴に登録
  const skipHistoryRef = useRef(false);

  const setAcTgObjs = (next) => {
    _setAcTgObjs((prev) => {
      const value = typeof next === "function" ? next(prev) : next;

      if (!skipHistoryRef.current) {
        const last = historyRef.current[historyRef.current.length - 1];
        if (!last || JSON.stringify(last) !== JSON.stringify(value)) {
          // もし途中で戻っていた場合、未来の履歴を削除
          historyRef.current = historyRef.current.slice(0, historyIndex + 1);
          historyRef.current.push(value);
          setHistoryIndex(historyRef.current.length - 1);
        }
      } else {
        skipHistoryRef.current = false; // 復元後はフラグリセット
      }

      return value;
    });
  };

  const restoreFromHistory = (index) => {
    if (index >= 0 && index < historyRef.current.length) {
      skipHistoryRef.current = true;

      _setAcTgObjs((prev) => {
        const restored = historyRef.current[index];

        // ここで直前 (prev) と直後 (restored) を比較できる
        const added = restored.filter((x) => !prev.includes(x));
        const removed = prev.filter((x) => !restored.includes(x));

        console.log("直前1:", prev);
        console.log("復元後2:", restored);
        // console.log("追加3:", added);
        // console.log("削除4:", removed);
        if (prev.includes("spaceHold") && !restored.includes("spaceHold")) {
          setIsWoSpaHold(false);
        }

        return restored;
      });

      setHistoryIndex(index);
    }
  };

  return {
    acTgObjs,
    setAcTgObjs,
    historyIndex,
    setHistoryIndex,
    restoreFromHistory,
    historyRef,
    isWoSpaHold,
    setIsWoSpaHold,
    isWoMuhHold,
    setIsWoMuhHold,
  };
};
export default useStateHistory;
