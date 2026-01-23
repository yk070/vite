import React from "react";

const MultiCircleDiv = ({
  layers = 3,
  base = 1,
  size = 60,
  color = "white",
  stroke = 2,
  gap = 6,
  fill = false, // 追加
}) => {
  const scaledSize = size * base;
  const scaledStroke = stroke * base;
  const scaledGap = gap * base;
  const outerRadius = scaledSize / 2;

  return (
    <div
      style={{ position: "relative", width: scaledSize, height: scaledSize }}
    >
      {Array.from({ length: layers }).map((_, i) => {
        const radius = outerRadius - i * scaledGap - scaledStroke / 2;
        const currentSize = radius * 2;
        const isOuter = i === 0; // 一番外側だけ塗りつぶす
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              width: currentSize,
              height: currentSize,
              border: `${scaledStroke}px solid ${color}`,
              borderRadius: "50%",
              top: outerRadius - radius,
              left: outerRadius - radius,
              backgroundColor: fill && isOuter ? color : "transparent", // 条件で塗りつぶす
            }}
          />
        );
      })}
    </div>
  );
};

const levelConfig = {
  first: {
    layers: 1,
    stroke: 20,
    // fill: true,
    topMultiplier: -1,
    rightMultiplier: -11,
  },
  second: { layers: 1, stroke: 10, topMultiplier: 2, rightMultiplier: -29 },
  third: { layers: 1, stroke: 1, topMultiplier: 4, rightMultiplier: -36 },
};

export default function MultiCircle({ level }) {
  const header = 100;
  const sidebar = 200;
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const base = Math.min((vh - header) * (16 / 9), vw - sidebar) / 4000;

  const config = levelConfig[level];
  if (!config) return null;

  const topValue = base * (config.topMultiplier ?? 0); // multiplierがなければ0
  const rightValue = base * (config.rightMultiplier ?? 0);
  return (
    <span
      style={{
        position: "absolute",
        top: topValue,
        right: rightValue,
        height: "100%",
        width: "100%",
        // backgroundColor: "red",
      }}
    >
      <MultiCircleDiv {...config} base={base} size={60} color="white" />
    </span>
  );
}
