import useCtx from "../context/useCtx.jsx";
import look from "../style/look.jsx";

const Copy = () => {
  const ctx = useCtx();

  const handleCopy = async () => {
    const text = ctx.script;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(text);
        return;
      } catch (e) {
        console.warn("Clipboard API 失敗、フォールバック", e);
      }
    }

    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  };

  return (
    <div onClick={handleCopy} style={look.copy1}>
      {"コピー"}
    </div>
  );
};

export default Copy;
