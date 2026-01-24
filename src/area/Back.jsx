import useCtx from "../context/useCtx.jsx";

const Back = () => {
  const ctx = useCtx();
  const click = () => {
    if (ctx.historyIndex > 0) ctx.restoreFromHistory(ctx.historyIndex - 1);
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
      <h1>戻る</h1>
    </div>
  );
};

export default Back;
