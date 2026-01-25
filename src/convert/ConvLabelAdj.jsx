const ConvLabelAdj = ({ label }) => {
  if (!label) return null;

  return (
    <>
      <span
        style={{
          fontSize: "0.7em",
          fontWeight: 500,
        }}
      >
        {label.charAt(0)}
      </span>
      <span
        style={{
          fontSize: "0.5em",
          fontWeight: 600,
        }}
      >
        {label.slice(1)}
      </span>
    </>
  );
};

export default ConvLabelAdj;
