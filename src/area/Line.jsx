import React from "react";
import useCtx from "../context/useCtx.jsx";
import { header, sidebar } from "../style/length.jsx";
import keyObjs from "../array/keyObjs.js";
import tone from "../style/color.jsx";
import Tg from "./Tg.jsx";
const Line = ({ containerRef, headX, headY }) => {
  const ctx = useCtx();
  if (ctx.isWoTgNone) return null;
  const modLineObj = {
    ctrl: "left_ctrl",
    alt: "left_alt",
    shift: "left_shift",
    space: "space",
    capslock: "capslock",
    win: "left_win",
  };
  const style = keyObjs.find(
    (obj) => obj.key === modLineObj[ctx.currentModTg],
  )?.style;

  const left = parseFloat(style?.left ?? "0");
  const top = parseFloat(style?.top ?? "0");
  const width = parseFloat(style?.width ?? "0");
  const height = parseFloat(style?.height ?? "0");

  const tailX = left + width / 2;
  const tailY = top + height / 2;
  const rect = containerRef.current?.getBoundingClientRect();
  if (!rect) return null;

  // baseの計算（画面サイズに応じて）
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const base =
    Math.min((vh - parseInt(header)) * (16 / 9), vw - parseInt(sidebar)) / 1000;

  // 線の始点・終点の座標
  const x1 = (tailX / 100) * rect.width;
  const y1 = (tailY / 100) * rect.height;
  const x2 = (headX / 100) * rect.width;
  const y2 = (headY / 100) * rect.height;

  // 差分
  const dx = x2 - x1;
  const dy = y2 - y1;

  // 長さと角度
  const length = Math.hypot(dx, dy);
  const angle = Math.atan2(dy, dx) * (180 / Math.PI);

  // 線・矢印サイズ
  const lineHeight = base * 12; // 線の太さ

  // 線の長さを矢印先端までに調整
  const adjustedLength = Math.max(length, 0);

  return (
    <div
      style={{
        position: "absolute",
        left: `${x1}px`,
        top: `${y1 - lineHeight / 2}px`, // 線の中心をy1に揃える
        width: `${adjustedLength}px`,
        height: `${lineHeight}px`,
        backgroundColor: "gray",
        transform: `rotate(${angle}deg)`,
        transformOrigin: "0 50%",
        pointerEvents: "none",
        zIndex: 1,
        border: "white solid 0.1px",
      }}
    >
      {/* 矢印 */}
      {/* <div
        style={{
          position: "absolute",
          left: `${adjustedLength}px`, // 線の終点に三角形を合わせる
          top: `${(lineHeight - 2 * arrowHeight) / 2}px`, // 線の中心に揃える
          width: 0,
          height: 0,
          borderTop: `${arrowHeight}px solid transparent`,
          borderBottom: `${arrowHeight}px solid transparent`,
          borderLeft: `${arrowWidth}px solid ${tone.ArrowColor}`,
        }}
      /> */}
    </div>
  );
};

export default Line;
