import useCtx from "../context/useCtx.jsx";

const Back = () => {
  const cx = useCtx();
  const click = () => {
    if (cx.historyIndex > 0) cx.restoreFromHistory(cx.historyIndex - 1);
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
