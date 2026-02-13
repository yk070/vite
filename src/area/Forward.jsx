import useCtx from "../context/useCtx.jsx";

const Forward = () => {
  const cx = useCtx();
  const click = () => {
    if (cx.historyIndex < cx.historyRef.current.length - 1)
      cx.restoreFromHistory(cx.historyIndex + 1);
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
