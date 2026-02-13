import Toggle from "./Toggle.jsx";
import look from "../style/look.jsx";
import useCtx from "../context/useCtx.jsx";

const TgToggle = () => {
  const cx = useCtx();

  if (!cx.isWoTgNone) return null;
  return (
    <span style={look.tg3}>
      <span style={look.tg5} onClick={() => cx.toggleVirtual("space")}>
        <span>{"Space 修飾キー化"}</span>
        <Toggle value={cx.usedAdjs.includes("space")} />
      </span>
      <span style={look.tg5} onClick={() => cx.toggleVirtual("muhenkan")}>
        <span>{"無変換 修飾キー化"}</span>
        <Toggle value={cx.usedAdjs.includes("muhenkan")} />
      </span>
    </span>
  );
};

export default TgToggle;
