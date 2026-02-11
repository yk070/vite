import Toggle from "./Toggle.jsx";
import look from "../style/look.jsx";
import useCtx from "../context/useCtx.jsx";

const TgToggle = () => {
  const ctx = useCtx();

  if (!ctx.isWoTgNone) return null;
  return (
    <span style={look.tg3}>
      <span style={look.tg5} onClick={() => ctx.toggleVirtual("space")}>
        <span>{"Space 修飾キー化"}</span>
        <Toggle value={ctx.usedAdjs.includes("space")} />
      </span>
      <span style={look.tg5} onClick={() => ctx.toggleVirtual("muhenkan")}>
        <span>{"無変換 修飾キー化"}</span>
        <Toggle value={ctx.usedAdjs.includes("muhenkan")} />
      </span>
    </span>
  );
};

export default TgToggle;
