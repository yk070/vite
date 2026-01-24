import { useRef, useState } from "react";

const useStateHistory = () => {
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
      _setAcTgObjs(historyRef.current[index]);
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
  };
};
export default useStateHistory;
