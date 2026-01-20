import React from "react";
import useCtx from "../context/useCtx.jsx";
import tgConvert from "../convert/tgConvert.jsx";
import acConvert from "../convert/acConvert.jsx";

const Script = () => {
  const { AcTgObjs, isWoSpaceHold } = useCtx();
  const SpaceHoldline = "Space::return";
  const maplines = AcTgObjs?.map(({ ac, tg }) => {
    const script_tg = tgConvert(tg);
    const script_ac = acConvert(ac);
    return `$${script_tg} ::${script_ac}\n`;
  });
  const lines =
    (isWoSpaceHold ? SpaceHoldline + "\n" : "") + maplines?.join("");
  return (
    <div
      style={{
        margin: 10,
        backgroundColor: "#444",
        overflowY: "scroll",
        whiteSpace: "pre-wrap",
        flex: 1,
      }}
    >
      {lines}
    </div>
  );
};

export default Script;
