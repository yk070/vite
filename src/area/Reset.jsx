import useCtx from "../context/useCtx.jsx";
import look from "../style/look.jsx";

const Reset = () => {
  const ctx = useCtx();
  const click = () => {
    ctx.setUsedItms([]);
    ctx.setCurrCapAc("none");
    ctx.setCurrCapTg("none");
    ctx.setCdAcObj(null);
  };
  return (
    <div onClick={click} style={look.reset1}>
      {"リセット"}
    </div>
  );
};

export default Reset;
