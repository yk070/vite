import React from "react";
import useCtx from "../context/useCtx.jsx";
import { header, sidebar } from "../style/length.jsx";
import tone from "../style/color.jsx";
import zObj from "../obj/zObj.jsx";
import Tg from "./Tg.jsx";
const Arrow = ({ containerRef }) => {
  const ctx = useCtx();
  if (!ctx.isAwayExist || ctx.isWoAcSd) return null;
  const TailX = ctx.TailX;
  const TailY = ctx.TailY;
  const HeadX = ctx.HeadX;
  const HeadY = ctx.HeadY;
  const rect = containerRef.current?.getBoundingClientRect();
  if (!rect) return null;

  // baseの計算（画面サイズに応じて）
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const base =
    Math.min((vh - parseInt(header)) * (16 / 9), vw - parseInt(sidebar)) / 1000;

  // 線の始点・終点の座標
  const x1 = (TailX / 100) * rect.width;
  const y1 = (TailY / 100) * rect.height;
  const x2 = (HeadX / 100) * rect.width;
  const y2 = (HeadY / 100) * rect.height;

  // 差分
  const dx = x2 - x1;
  const dy = y2 - y1;

  // 長さと角度
  const length = Math.hypot(dx, dy);
  const angle = Math.atan2(dy, dx) * (180 / Math.PI);

  // 線・矢印サイズ
  const lineHeight = base * 7; // 線の太さ
  const arrowHeight = base * 10; // 矢印高さ
  const arrowWidth = base * 12; // 矢印幅

  // 線の長さを矢印先端までに調整
  const adjustedLength = Math.max(length * 0.8, 0);

  return (
    <div
      style={{
        position: "absolute",
        left: `${x1}px`,
        top: `${y1 - lineHeight / 2}px`, // 線の中心をy1に揃える
        width: `${adjustedLength}px`,
        height: `${lineHeight}px`,
        backgroundColor: tone.ArrowColor,
        transform: `rotate(${angle}deg)`,
        transformOrigin: "0 50%",
        pointerEvents: "none",
        zIndex: zObj.arrow, // ← 高くして常に前面
      }}
    >
      <div
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
      />
    </div>
  );
};

export default Arrow;
