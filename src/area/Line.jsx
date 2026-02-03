import useCtx from "../context/useCtx.jsx";
import { header, sidebar } from "../style/length.jsx";
import posiIdObj from "../obj/posiIdObj.js";
import { adjLineObj } from "../obj/namedObj.js";
import zObj from "../obj/zObj.js";

const Line = ({ props }) => {
  const ctx = useCtx();
  const { key, containerRef, headX, headY } = props;

  const isCapableHd = ctx.hdCapablePreferences?.some((preference) => {
    const [, after] = preference.tg.split("*");
    return after === key;
  });
  if (ctx.isWoTgNone) return null;

  const styleObj = posiIdObj[adjLineObj[ctx.currCapTg]];

  const left = parseFloat(styleObj?.left ?? "0");
  const top = parseFloat(styleObj?.top ?? "0");
  const width = parseFloat(styleObj?.width ?? "0");
  const height = parseFloat(styleObj?.height ?? "0");

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
        zIndex: isCapableHd ? zObj.capableHdLine : zObj.normalLine,
        border: "white solid 0.1px",
      }}
    ></div>
  );
};

export default Line;
