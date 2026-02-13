import useCtx from "../context/useCtx.jsx";
import look from "../style/look.jsx";

const Reset = () => {
  const cx = useCtx();
  const click = () => {
    cx.setUsedItms([]);
    cx.setCurrCapAc("none");
    cx.setCurrCapTg("none");
    cx.setCdAcObj(null);
  };
  return (
    <div onClick={click} style={look.reset1}>
      {"リセット"}
    </div>
  );
};

export default Reset;
