import useCtx from "../context/useCtx.jsx";
import look from "../style/look.jsx";

const Reset = () => {
  const ctx = useCtx();

  return (
    <div onClick={() => ctx.setAcTgObjs([])} style={look.reset1}>
      {"リセット"}
    </div>
  );
};

export default Reset;
