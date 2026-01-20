// src/components/use/useState.jsx
import { useState } from "react";

// カスタムフックにまとめる
export function UseStates() {
  const [currentModAc, setCurrentModAc] = useState("none");
  return {
    currentModAc,
    setCurrentModAc,
  };
}
