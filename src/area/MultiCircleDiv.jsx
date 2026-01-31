const MultiCircleDiv = ({
  circleColor,
  layers = 3,
  base = 1,
  size = 60,
  stroke = 2,
  gap = 6,
  fill = false,
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
        const isOuter = i === 0;

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              width: currentSize,
              height: currentSize,
              border: `${scaledStroke}px solid ${circleColor}`,
              borderRadius: "50%",
              top: outerRadius - radius,
              left: outerRadius - radius,
              backgroundColor: fill && isOuter ? circleColor : "transparent",
            }}
          />
        );
      })}
    </div>
  );
};

export default MultiCircleDiv;
