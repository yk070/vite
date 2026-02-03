const MultiCircleDiv = ({ circleColor, base = 1, size = 60, stroke = 2 }) => {
  const scaledSize = size * base;
  const scaledStroke = stroke * base;
  return (
    <div
      style={{ position: "relative", width: scaledSize, height: scaledSize }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          border: `${scaledStroke}px solid ${circleColor}`,
          borderRadius: "50%",
          boxSizing: "border-box",
        }}
      />
    </div>
  );
};

export default MultiCircleDiv;
