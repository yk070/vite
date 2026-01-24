import useCtx from "../context/useCtx.jsx";

const Forward = () => {
  const ctx = useCtx();
  const click = () => {
    if (ctx.historyIndex < ctx.historyRef.current.length - 1)
      ctx.restoreFromHistory(ctx.historyIndex + 1);
  };
  return (
    <div
      onClick={click}
      style={{
        position: "sticky",
        top: 56,
        backgroundColor: "#999",
        height: "56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <h1>進む</h1>
    </div>
  );
};

export default Forward;
